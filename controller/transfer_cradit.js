const express = require('express');
const TransferCradit = require('../modal/transer_cradit');


//form credit-transfer-data
const creaditTransferData= (req,res)=>{
    const { id,sender,recevier,Transfer_credit } = req.query;
    var newCredit = new TransferCradit({
        id,
        sender,
        recevier,
        Transfer_credit
    })
    
    newCredit.save().then(function(){
        TransferCradit.find().then(user=>{
            res.render('transfer_cradit',{transfers :user});
        })
    });
}

// get transfer credit table
const transferCredit = (req,res,next)=>{
    TransferCradit.find().then(user=>{
        res.render('transfer_cradit',{transfers :user});
    })
}

exports.transferCredit = transferCredit;
exports.creaditTransferData = creaditTransferData;
