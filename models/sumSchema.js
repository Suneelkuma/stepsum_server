const mongoose=require('mongoose');

const Schema=mongoose.Schema;

const sumSchema=new Schema({
    user:{type:mongoose.Schema.Types.ObjectId,
    ref:"USER"},
number1:{type:Number,required:true},
number2:{type:Number,required:true},
total:{type:Number}
})

const sumModel=mongoose.model("SUM",sumSchema);

module.exports=sumModel