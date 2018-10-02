const db = require('../model/db_functions');

module.exports.getUsers = function(req, res) {
    db.gets()
        .then(result => res.status(200).json(result))
        .catch(err => res.status(400).json({err: err.message}))
};

module.exports.addUser = function(req, res) {
    db.add(req.body)
        .then(result => res.status(201).json(result))
        .catch(err => res.status(400).json({err: err.message}))
};