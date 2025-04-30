const express= require ("express")
const app= express();
const db= require("./Database/connect")

app.get('/books',(req,res)=>{

    res.json({
        message:"Book is fetch or get Successfully."
    })
}                                                         
);

// //// database connection link 
// "postgresql://postgres.cxqgmsppjjmtlvghyktz:[venom&@321]@aws-0-ap-southeast-1.pooler.supabase.com:6543/postgres"


app.post('/books',(req,res)=>{

    res.json({
        message:"Book is Sucessfully Inserted."
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
                    