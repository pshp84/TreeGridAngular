const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000;
app.use(express.json());
app.use((req, res, next) => {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
})

app.post('/api/users', (req, res) => {
    if (req.body.UserId) {
        fs.readFile(__dirname + '/users.json', 'utf8', (err, data)=> {
            let items = JSON.parse(data);
            const result = items.filter((row) => { return (row.UserId == req.body.UserId) });
            res.end(JSON.stringify(result));
        })
    } else {
        res.end([]);
    }
});

app.listen(port, () =>{
    console.log("App running at 3000");
});