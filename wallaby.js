var wallabyWebpack = require('wallaby-webpack');

module.exports = function(wallaby) {

    var webpackPostprocessor = wallabyWebpack({
        // webpack options
        resolve: {
            extensions: ['.js', '.jsx']
        }
    });

    return {
        files: [
            { pattern: 'src/**/*.js*', load: false }
        ],

        tests: [
            { pattern: 'test/**/*.spec.js*', load: false }
        ],

        compilers: {
            '**/*.js*': wallaby.compilers.babel()
        },

        postprocessor: webpackPostprocessor,

        setup: function() {
            window.__moduleBundler.loadTests();
        }
    };
};
