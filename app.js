const express = require('express');
//const localUri = 'mongodb://0.0.0.0:27017/mydatabase';

//  const localUri = 'mongodb://localhost:27017/newDatabase';
// const localUri = 'mongodb+srv://shabirkhan:Pakistan121@cluster0.wq0g9oh.mongodb.net/?retryWrites=true&w=majority';

const localUri = 'mongodb+srv://shabbirkhan:rswcFaUaOdcVWqT2@cluster0.rimfoov.mongodb.net/?retryWrites=true&w=majority';

const app = express();
const mongoose = require('mongoose');
const feeRoutes = require('./routes/fee-routes');
const router = require('./routes/user-route');
app.use(express.json());


   


mongoose.connect(localUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
},(err)=>{

    if(err){
        console.log(err);

    }else{
        console.log('Sucessfully connected');
    }
});


// get all user 
app.use('/users', router );

// add new user
app.use('/users/', router);


// get all students
app.use('/students/', feeRoutes);



const port = process.env.PORT || 3000; 
app.listen(port,() => console.log(`Listening on port ${port}`));



// totourail url

//https://www.youtube.com/watch?v=VT20NTbn6U4