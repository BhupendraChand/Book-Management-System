//// databse connect code 
const {Sequelize,DataTypes} = require('sequelize');

const sequelize= new Sequelize("postgresql://postgres.cxqgmsppjjmtlvghyktz:venom&@321@aws-0-ap-southeast-1.pooler.supabase.com:6543/postgres")
const bookModel= require("./models/bookModel")
sequelize.authenticate()
.then(() => {
    console.log("Authencitation Database connected Successfully.");
})

.catch((err) => {
    console.log("Unable to connect to the database."+ err);
})

const db={}
db.Sequelize=Sequelize
db.sequlize=sequelize

db.products=require("./models/productModel")(sequelize,DataTypes)
db.books=require("./models/bookModel")(sequelize,DataTypes)
db.users=require("./models/userModel")(sequelize,DataTypes)
sequelize.sync({alter:false})
.then(() => {
    console.log("Database Migrate Successfully.");
})

module.exports=db



