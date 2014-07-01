var path    = require('path'),
    appRoot = path.resolve(__dirname, '../../');

function getPaths() {
    return {
        'appRoot': appRoot,
        'lang'   : '',
        'config' : path.join(appRoot, 'config.js'),
        'server' : path.join(appRoot, 'server'),
        'images' : 'public/images',
        'js'     : 'public/js',
        'css'    : 'public/css'
    };
}

module.exports = getPaths;
