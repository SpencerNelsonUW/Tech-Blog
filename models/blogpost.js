const { Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class blogpost extends Model {}

blogpost.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },    
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        date: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        post: {
            type: DataTypes.STRING,
            allowNull:false,
        },
        creator: {
            type:DataTypes.STRING,
            allowNull:false,
        },
    },
    {
        sequelize,
        freezeTableName: true,
        underscored:true,
        modelName:'blogpost',
    }
);

module.exports = blogpost;