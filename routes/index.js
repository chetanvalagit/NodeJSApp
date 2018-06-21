var mathRout = require('./math')

module.exports = (app) => {

    app.get("/", (req, res) =>{
        res.send("Hello World");
    })

    mathRout(app);
    
}