const express = require('express');
const TransferCradit = require('../modal/transer_cradit');

Dummy_transfer=[{
    id:1,
    sender:'sahil',
    recevier:'gupta',
    Transfer_credit:10,
    Tansfer_date:new Date().toString()
}]

// get transfer credit table
const transferCredit = (req,res,next)=>{
    res.render('transfer_cradit',{transfers : Dummy_transfer});
}

//form credit-transfer-data
const creaditTransferData= (req,res,next)=>{
    const { id,sender,recevier,Transfer_credit } = req.body;
    console.log(req.body);
    const credit = {
        id,
        sender,
        recevier,
        Transfer_credit
    }
    Dummy_transfer.push(credit);
    res.status(201).json({credit:credit});
}

exports.transferCredit = transferCredit;
exports.creaditTransferData = creaditTransferData;