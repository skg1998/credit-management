const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userShema = new Schema({
   id:{
       type:String,
       required:true
   },
   name:{
       type:String,
       required:true
   },
   email:{
       type:String,
       required:true
   },
   current_credit:{
       type:Number,
       required:true
   },
   transfer_credit:{
       transfer_name:{
            type:String,
            required:true
       },
       credit:{
            type:Number,
            required:true
       }
   }
})

module.exports = mongoose.model('User',userShema);

