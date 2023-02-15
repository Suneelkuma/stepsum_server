const express=require("express");

const router=express.Router();

const Sum=require('../models/sumSchema')
const middleware=require("../middleware/authenticate")
router.post('/createSum',middleware,async(req,res)=>{
  try {
    const {number1,number2}=req.body
    if (!number1||!number2) {
        return res.status(422).json({error:"Please fill all the data"})
    }
    const sum=await Sum.create({number1,number2,total,  user:req.userID})
    const savedtodo=sum.save();
    res.status(200).json({
        status:"success",
        sum
    })

  } catch (e) {
    res.status(500).json({
        status:"failed",
        message:e.message
    })
  }
})


// router.get('/fetchalltodos',middleware,async(req,res)=>{
//     try {
//         const todos=await Todo.find({user:req.userID})
//         res.json(todos)
//     } catch (e) {
//         res.status(500).json({
//             status:"failed",
//             message:e.message
//         })
//     }
// })
module.exports=router;