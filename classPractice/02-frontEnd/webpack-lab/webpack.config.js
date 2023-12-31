const path = require('path');

module.exports = {
    mode: 'development',
    entry: './client/app.js',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    }
};