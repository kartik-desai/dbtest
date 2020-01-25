const express = require('express');

const app = express();
const id = require("./routes/id");
const body_parser = require("body-parser");

app.use(body_parser.json());
app.listen(3000);

app.use('/id',id);

app.get('/',(req,res)=> {
    res.send("Hello World");
});

