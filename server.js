let express = require('express');
let app = express();
let bodyparser = require('body-parser');

//routes
let userroute = require('./routes/userRoute');

app.use(bodyparser.urlencoded({ extended: false }))

app.use('/user',userroute);

app.listen(3000,()=>console.log('node server is working'));