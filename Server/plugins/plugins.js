
module.exports = [
    {
        register: require('hapi-auth-cookie'),
        options: {},
    },
    {
        register: require('hapi-auth-jwt2'),
        options: {},
    }
]