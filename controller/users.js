const express = require('express');
const User = require('../modal/user');

DUMMY_USERS = [
    {
        id:'1',
        name:'sahil',
        email:'sahil@gmail.com',
        current_credit:12,
        transfer_credit:12
    },
    {
        id:'2',
        name:'sahil',
        email:'sahil@gmail.com',
        current_credit:12,
        transfer_credit:12
    },
     {
        id:'3',
        name:'sahil',
        email:'sahil@gmail.com',
        current_credit:12,
        transfer_credit:12
    },
    {
        id:'4',
        name:'sahil',
        email:'sahil@gmail.com',
        current_credit:12,
        transfer_credit:12
    }, {
        id:'5',
        name:'sahil',
        email:'sahil@gmail.com',
        current_credit:12,
        transfer_credit:12
    }, {
        id:'6',
        name:'sahil',
        email:'sahil@gmail.com',
        current_credit:12,
        transfer_credit:12
    }, {
        id:'7',
        name:'sahil',
        email:'sahil@gmail.com',
        current_credit:12,
        transfer_credit:12
    }, {
        id:'8',
        name:'sahil',
        email:'sahil@gmail.com',
        current_credit:12,
        transfer_credit:12
    },
    {
        id:'9',
        name:'sahil',
        email:'sahil@gmail.com',
        current_credit:12,
        transfer_credit:12
    },
    {
        id:'10',
        name:'sahil',
        email:'sahil@gmail.com',
        current_credit:12,
        transfer_credit:12
    }
]

const putUserIntoDatabase =  (req,res)=>{
    const {id,name,email,current_credit,transfer_credit,date} = req.body;
    const newUser = new User({
        id,
        name,
        email,
        current_credit,
        transfer_credit,
        date
    })
    User.insertMany(newUser).then(res=>{
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
