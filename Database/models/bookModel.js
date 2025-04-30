const bookModel = (sequelize, DataTypes) => {
   const Book= sequelize.define("book",{
    bookId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
     
    },
        bookName: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        bookPrice: {
            type: DataTypes.FLOAT,
        },

        bookAuthor: {
            type: DataTypes.STRING,
        },

        bookGenre:{
            type: DataTypes.STRING,
           
        },

        createdAt: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
        },

        
    })
    return Book
}
module.exports = bookModel