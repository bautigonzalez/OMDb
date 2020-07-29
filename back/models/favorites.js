var Sequelize = require("sequelize");
var db = require('../db/index')

class Favorite extends Sequelize.Model { }
Favorite.init(
    {
        title: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        imdbID: {
            type: Sequelize.STRING,
            allowNull: false,
        },
    },
    { sequelize: db, modelName: "favorite" }
);

module.exports = Favorite