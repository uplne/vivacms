var path    = require('path'),
    appRoot = path.resolve(__dirname, '../../../');

function getPaths() {
    return {
        'appRoot': appRoot,
        'config' : path.join(appRoot, 'config.js'),
        'images' : path.join(appRoot, 'images'),
        'js'     : path.join(appRoot, 'js'),
        'css'    : path.join(appRoot, 'css')
    };
}

module.exports = getPaths;
