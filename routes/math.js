
module.exports = (app) => {

    app.get('/add', (req, res) => {

            try
            {
                // lets get limit parameter value from url
                let firstNumber = parseInt(req.query.first);
                let secondNumber = parseInt(req.query.second);
                if(isNaN(firstNumber) || isNaN(secondNumber))
                {
                    res.status(400).json({"error":"invalid input parameter"});
                    return;    
                }
                res.json(firstNumber+secondNumber);
            }
            catch(ex)
            {
                res.status(400).json({"error":"invalid input parameter"});
            }
        }
    )

}