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



app.post('/books',async(req,res)=>{

try{
const{bookName,bookPrice,bookAuthor,bookGenre}=req.body
if (!bookName || !bookPrice || !bookAuthor || !bookGenre){
    return res.json({
        message:" All Field is Required for Insertion."
    });
}

 const createbooks= await books.create({
    bookName:bookName,
    bookPrice:bookPrice,
    bookAuthor:bookAuthor,
    bookGenre:bookGenre

});
    res.json({
        message:"Book is Sucessfully Inserted.",
        datas:createbooks
       
    });
} catch(err){
    res.json({
        message:"Error Occured during insertion.",
        error:err.message

    });
}
});


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
                    