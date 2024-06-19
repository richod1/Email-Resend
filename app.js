const express=require("express")
const app=express()
const {Resend}=require("resend")
require("dotenv").config()
const port =3000

const resend=new Resend(process.env.RESEND_API);
console.log(resend.domains.list())
app.get("/",async(req,res)=>{
    const {data,error}=await resend.emails.send({
        from:"Compa <email@connect.cloud>",
        to:["frimpsup@gmail.com"],
        subject:'Hello Resend',
        html:`<strong>This worked!</strong>`,
    })
    if(error){
        console.log(error.message)
        return res.status(400).json({error:"failed to send email"});
    }
    res.status(200).json({data:"email sent Successfully"})

})


app.listen(port,()=>{
    console.log(`server is up on port :${port}`)
})