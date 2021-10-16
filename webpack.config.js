const path = require('path');

module.exports = {
    //...
    resolve: {
        alias: {
            api: path.resolve(__dirname, 'src/api/'),
            component: path.resolve(__dirname, './src/component/'),
            redux: path.resolve(__dirname, './src/redux/'),
            //   Templates: path.resolve(__dirname, 'src/templates/'),
        },
    },
};