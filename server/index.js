require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require("cors");
const userRoutes = require('./routes/userRoutes');
const productsRoutes = require('./routes/productsRoutes');
const cartRoutes = require('./routes/cartRoutes');

const app = express();

const port = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());

//accessing the routes
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

app.use('/api', userRoutes);
app.use('/api/products', productsRoutes);
app.use('/api/cart', cartRoutes);

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

mongoose.connect(process.env.ATLAS_URI)
    .then(() => {
        app.listen(port, () => {
            console.log(`DB Connected & Server is running on port ${port}`);
        });
    })
    .catch((error) => {
        console.log(error);
    })