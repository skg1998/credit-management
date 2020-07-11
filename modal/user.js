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
   Transfer_credit:{
        type:Number,
        required:true
    },
    date:{
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('User',userShema);

