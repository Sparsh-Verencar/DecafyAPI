require('dotenv').config()
const express = require('express');
const app = express();
const connectDB = require('./DB/Connect')

const PORT = process.env.PORT || 5000;

const product_routes = require("./routes/products");

app.get('/', (req, res) => {
    res.send('hello world, I am live');
})

//middleware: "redirects" the /api/products to what is defined in product routes
app.use("/api/products", product_routes);

const start = async (params) => {
    try {
        await connectDB(process.env.MONGODB_URI);
        app.listen(PORT, () => {
            console.log(`${PORT} Yes is connected`);
        })
    } catch (error) {
        console.log(error);
    }
}

start();
