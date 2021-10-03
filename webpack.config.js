const path = require('path');

module.exports = {
    //...
    resolve: {
        alias: {
            api: path.resolve(__dirname, 'src/api/'),
            component: path.resolve(__dirname, './src/component/'),
            //   Templates: path.resolve(__dirname, 'src/templates/'),
        },
    },
};