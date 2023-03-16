


const Fee = require('../model/fee');


const getFeeData = async(req, res, next)=>{
 
 
 let students ;
 
 try {
   students =    await Fee.find();

 } catch (error) {
 
    return res.status(500).json({message: "Internal Server Error"});
 }


 if(!students){
return res.status(400).json({message : "no comments"});

 }else{
    return res.status(200).json( {students});
 }


}





exports.getFeeData = getFeeData;
