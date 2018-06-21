var express = require('express');
var app = express();
var cors = require('cors');


app.use(cors());

require('./routes')(app);

app.listen(4000, (error)=>{
    if(error)
    {
        console.log("Can not able to start server on port 4000 : " + error);
    }
    else
    {
        console.log('listening on 4000')
    }
})

