const express = require('express');
const { connect } = require('./db');
const { productRoute } = require('./Routes/Product/product');
require('dotenv').config();
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());

app.use('/product', productRoute);
app.listen(process.env.PORT, async()=>{
    try {
        await connect;
        console.log(`connecting to db`);
        console.log(`listening on ${process.env.PORT}`);
        
    } catch (error) {
        console.error(`something went wrong`);
        console.error(error);
    }
})