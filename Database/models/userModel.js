const userModel = (sequelize, DataTypes) => {
    const User=sequelize.define("user", {
        userId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
         
        },
        userName: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        password: {
            type: DataTypes.STRING,
        },

        email: {
            type: DataTypes.STRING,
        },

        

    })
    return User
}
module.exports = userModel