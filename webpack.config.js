const path = require('path');

module.exports = {
    //...
    resolve: {
        alias: {
            api: path.resolve(__dirname, 'src/api/'),
            //   Templates: path.resolve(__dirname, 'src/templates/'),
        },
    },
};