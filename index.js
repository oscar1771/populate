const express = require("express");
const bodyParser = require("body-parser");
const warriorRouter = require("./routes/warriorRoutes");

const mongoose = require('mongoose');
const mongodbRoute = 'mongodb+srv://oscar:tst_sr_0@cluster0.pynwe.mongodb.net/ER6?retryWrites=true&w=majority';


const app = express();
const PORT = process.env.PORT || 3000;


// Use bodyparser
app.use(bodyParser.json());

//Load router 
app.use("/warriors", warriorRouter);



async function start() {
    try {
        await mongoose.connect(mongodbRoute);
        app.listen(PORT, () => {
            console.log(`API is listening on port ${PORT}`);
        });
        console.log('Conexión con Mongo correcta.')
    }
    catch (error) {
        console.log(`Error al conectar a la base de datos: ${error.message}`);
    }
}

start();




