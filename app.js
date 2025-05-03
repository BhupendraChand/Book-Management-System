// Importing Required Libraries (Express)
const express= require ("express")
const bookRoute= require("./routes/bookRoute")
const app= express();

app.use(express.json())
app.use("/api",bookRoute)
// Server
app.listen(3000,()=>{
    console.log("Server Is Running On Port 3000");
}
); 
                    
