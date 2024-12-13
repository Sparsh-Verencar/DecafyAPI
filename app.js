const express = require('express');
const app = express();

const PORT = process.env.PORT || 5000;

const product_routes = require("./routes/products");

app.get('/', (req, res) => {
    res.send('hello world, I am live');
})

//middleware: "redirects" the /api/products to what is defined in product routes
app.use("/api/products", product_routes);

const start = async (params) => {
    try {
        app.listen(PORT, () => {
            console.log(`${PORT} Yes is connected`);
        })
    } catch (error) {
        console.log(error);
    }
}

start();
