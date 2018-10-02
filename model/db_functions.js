const User_model = require('./user');

module.exports.gets = function() {
    return User_model.find()
}

module.exports.add = function(data) {
    let user = new User_model({
        email: data.email,
        password: data.password
    })

    return user.save()
};