const { DataTypes } = require('sequelize');

const seq = require('../config/db');


const UserSchema = seq().define('UserSchema', {
    fullname:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        required: true,
        len: [4, 255],
        allowNull: false
    },
    createdAt:{
        type: DataTypes.DATE,
        defaultValue: Date.now
    }
})

module.exports = UserSchema