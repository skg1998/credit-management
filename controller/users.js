const express = require('express');
const User = require('../modal/user');

DUMMY_USERS = [
    {
        id:'1',
        name:'sahil gupta',
        email:'sahil@gmail.com',
        current_credit:12,
        transfer_credit:12,
        date:(Date.now()).toString()
    },
    {
        id:'2',
        name:'test2',
        email:'test@gmail.com',
        current_credit:12,
        transfer_credit:12,
        date:(Date.now()).toString()
    },
     {
        id:'3',
        name:'sunil kumar',
        email:'kumarl@gmail.com',
        current_credit:12,
        transfer_credit:12,
        date:(Date.now()).toString()
    },
    {
        id:'4',
        name:'kumar sanu',
        email:'sanu@gmail.com',
        current_credit:12,
        transfer_credit:12,
        date:(Date.now()).toString()
    }, {
        id:'5',
        name:'vijay Gupta',
        email:'gupta123@gmail.com',
        current_credit:12,
        transfer_credit:12,
        date:(Date.now()).toString()
    }, {
        id:'6',
        name:'test123',
        email:'test123@gmail.com',
        current_credit:12,
        transfer_credit:12,
        date:(Date.now()).toString()
    }, {
        id:'7',
        name:'rahul',
        email:'rahul@gmail.com',
        current_credit:12,
        transfer_credit:12,
        date:(Date.now()).toString()
    }, {
        id:'8',
        name:'mannu',
        email:'mannu@gmail.com',
        current_credit:12,
        transfer_credit:12,
        date:(Date.now()).toString()
    },
    {
        id:'9',
        name:'sourya',
        email:'sourya@gmail.com',
        current_credit:12,
        transfer_credit:12,
        date:(Date.now()).toString()
    },
    {
        id:'10',
        name:'shubam',
        email:'shubam123@gmail.com',
        current_credit:12,
        transfer_credit:12,
        date:(Date.now()).toString()
    }
]

// put users into database
const putUserIntoDatabase =  (req,res)=>{
    const {name,email,current_credit,transfer_credit} = req.body;
    const newUser = new User({
        name,
        email,
        current_credit,
        transfer_credit
    })
    newUser.save().then(res=>{
         res.status(200).json({message:"successfully created"})
    }).catch(err=>{
        console.log(err);
    })
}


//Get all user
const getAllUsers = (req,res,next)=>{
    res.render('allusers',{users : DUMMY_USERS});
}


//get user by id
const getUserById = async  (req,res,next) =>{
    const userId = req.params.uid;
    try{
       var user = await DUMMY_USERS.filter(u=>{
           return u.id === userId
       })
    }catch(err){
        const error = res.json({message : 'user not found with this id'});
        return next(error)
    }

    if(user ){
        res.render('profile',{users : DUMMY_USERS ,user:user});
        console.log(user);
    }else{
        res.json({message:'no user found '})
    }

}


exports.getAllUsers = getAllUsers;
exports.getUserById = getUserById;
exports.putUserIntoDatabase=putUserIntoDatabase;
