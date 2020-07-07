const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TransferShema = new Schema({
   sender:{
       type:String,
       required:true
   },
   recevier:{
       type:String,
       required:true
   },
   Transfer_credit:{
       type:Number,
       required:true
   },
   Transfer_date:{
     type: Date,
     default: Date.now
   }
})

module.exports = mongoose.model('Transfer_cradit',TransferShema);

