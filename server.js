let express = require('express');
let app = express();
let bodyparser = require('body-parser');

//routes
let itemRoute = require('./routes/itemRoute');
let eventRoute = require('./routes/eventRoute');

app.use(bodyparser.urlencoded({ extended: false }))

app.use('/item',itemRoute);
app.use('/event',eventRoute);

app.listen(4000,()=>console.log('node server is working'));