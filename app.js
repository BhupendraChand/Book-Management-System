const express= require ("express")
const app= express();

const {books}= require("./Database/connect")
app.use(express.json())
app.get('/books',async(req,res)=>{

const datas=await books.findAll()

    res.json({
        message:"Book is fetch or get Successfully.",
        data:datas
    })
}                                                         
);



// //// database connection link 
// "postgresql://postgres.cxqgmsppjjmtlvghyktz:[venom&@321]@aws-0-ap-southeast-1.pooler.supabase.com:6543/postgres"


app.post('/books',async(req,res)=>{
console.log(req.body)
const{bookName,bookPrice,bookAuthor,bookGenre}= req.body
 await books.create({
    bookName:bookName,
    bookPrice:bookPrice,
    bookAuthor:bookAuthor,
    bookGenre:bookGenre

})
    res.json({
        message:"Book is Sucessfully Inserted.",
       
    })
}
);

app.patch('/books/:id',(req,res)=>{

    res.json({
        message:"Book is Updated Successfully."
    })
}
);

app.delete('/books/:id',(req,res)=>{

    res.json({
        message:"Book is Deleted Successfully."
    })
}
);

app.listen(3000,()=>{
    console.log("Server Is Running On Port 3000");
}
); 
                    