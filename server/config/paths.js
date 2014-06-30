var path    = require('path'),
    appRoot = path.resolve(__dirname, '../../');

function getPaths() {
    return {
        'appRoot': appRoot,
        'lang'   : '',
        'config' : path.join(appRoot, 'config.js'),
        'server' : path.join(appRoot, 'server'),
        'images' : path.join(appRoot, 'public/images'),
        'js'     : path.join(appRoot, 'public/js'),
        'css'    : 'public/css'
    };
}

module.exports = getPaths;
