


const mongoose = require("mongoose");
const { validationResult } = require('express-validator');
const User = require("../model/user");
// const { CURSOR_FLAGS } = require("mongodb");




/// Get all users ======================
const getAllUsers =async (req, res, next)=>{
    let users;
    try {
        
      users =  await  User.find(
        {
            name: "Khan"
        },
        
      );
    } catch (error) {
        return next(error);
    }
   if(!users){

        return res.status(500).json({"message" : "internal server error"});
    }else{

        return res.status(500).json({users});

    }
}


// const addNewUser = async (req, res, next)=>{
// let user;
//  try {
//     user = await User({
//         name: req.body.name,
//         email: req.body.email,
//         password: req.body.password,
//     });
//     await user.save();

//  } catch (error) {
//     return res.status().json({
//         "status_code": 400,
//         message: error.message,
//         "status": false,
//         "body" : error.json
//     });
//  }



//  if(!user){
//     return res.status(500).json({"message" : "internal server error"});

//  }else{


//     return res.status(200).json({user});
//  }




// }


// const addNewUser = async (req, res, next) => {
//   // validate the request using express-validator
//   const errors = validationResult(req);
//   if (!errors.isEmpty()) {
//     return res.status(400).json({ errors: errors.array() });
//   }

//   try {
//     const user = await User({
//       name: req.body.name,
//       email: req.body.email,
//       password: req.body.password,
//     });
//     await user.save();
//     return res.status(200).json({ user });

//   } catch (error) {
//     console.error(error);
//     return res.status(500).json({ message: 'Internal server error' });
//   }
// };


// Add New User =================
const addNewUser = async (req, res, next) => {
  // validate the request using express-validator
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const user = await User({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });
    await user.save();
    return res.status(200).json({ user });

  } catch (error) {
    console.log('=======================================');
  console.log(res);
    return res.status(400).json({ status: false,message: error });
  }
};



const updateUser = async (req, res, next) => {
   const userId =  req.params.id;
}







exports.getAllUsers = getAllUsers;
exports.addNewUser = addNewUser;
