const mongoose = require("mongoose");
mongoose.set("debug", true);
mongoose.Promise = Promise;
mongoose.connect("mongodb+srv://Vee:12345678@cluster0.zvjqhrk.mongodb.net/?retryWrites=true&w=majority", {keepAlive: true}
);

module.exports.User = require("./user")