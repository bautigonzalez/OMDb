const User = require("./users");
const Favorite = require("./favorites");

User.hasMany(Favorite, {as: "favorite"});
Favorite.belongsTo(User, {as: "user"});

module.exports = { User, Favorite };