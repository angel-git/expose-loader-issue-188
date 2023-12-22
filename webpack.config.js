const path = require('path');

const src = path.resolve() + '/src';

const aliases = {
    'react/jsx-dev-runtime': 'react/jsx-dev-runtime.js',
    'react/jsx-runtime': 'react/jsx-runtime.js',
    '@mui/material/styles': '@mui/material/styles/index.js',
    '@mui/x-date-pickers/AdapterDayjs': '@mui/x-date-pickers/AdapterDayjs/index.js',
    'dayjs/plugin/updateLocale': 'dayjs/plugin/updateLocale.js',
    'dayjs/plugin/utc': 'dayjs/plugin/utc.js',
};

module.exports = [
    {
        name: 'js',
        entry: {
            main: {
                import: `${src}/main.js`,
                dependOn: 'vendor',
            },
            vendor: `${src}/vendor.js`,
        },
        module: {
            rules: [{
                test: /\.css$/,
                use: 'url-loader',
            }],
        },
        output: {
            path: path.resolve() + '/dist',
            filename: '[name].js',
        },
        resolve: {
            alias: aliases,
        },
        optimization: {
            splitChunks: {
                cacheGroups: {
                    vendor: {
                        name: 'vendor',
                        test: /[\\/]node_modules[\\/]/,
                        reuseExistingChunk: true,
                        enforce: true,
                        chunks: 'all',
                    }
                }
            }
        }
    },
];
