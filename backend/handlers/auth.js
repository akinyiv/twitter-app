const db = require("../models");
const jwt = require("jsonwebtoken");

exports.signup = async function(req, res, next) {
    try {
        let user = await db.User(req.body);
        let {id, username, profileImageUrl} = user;
        let token = jwt.sign({id,username, profileImageUrl }, process.env.SECRET_KET);
    } catch (err) {}
};