var express = require('express');
var app = express();
var cors = require('cors');
const port = 8080

app.use(cors());

require('./routes')(app);

app.listen(port, (error)=>{
    if(error)
    {
        console.log("Can not able to start server on port" + port + " : " + error);
    }
    else
    {
        console.log('listening on '+ port)
    }
})

