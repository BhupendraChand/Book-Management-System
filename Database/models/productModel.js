const productModel =(sequelize,DataTypes) =>{
    const Product= sequelize.define("product",{
        productId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
         },
        productName: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        productPrice: {
            type: DataTypes.FLOAT,
        },

        productCategory: {
            type: DataTypes.STRING,
        },

        productDescription:{
            type: DataTypes.STRING,
           
        },

        createdAt: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
        },

        
    })
    return Product

}
module.exports = productModel