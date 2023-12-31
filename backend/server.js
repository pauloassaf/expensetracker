const express = require("express");
const cors = require("cors");
const app = express();
const {readdirSync} = require('fs');
const { db } = require('./db/db');



require('dotenv').config();

const PORT = process.env.PORT || 3000;


//middlewares
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(cors());




const server = () => {
    db()
    app.listen(PORT, () => {
        console.log(`listening to port ${PORT}`);
    })
}

server()

//routers
readdirSync('./routes').map((route) => app.use('/api/v1', require('./routes/' + route)))