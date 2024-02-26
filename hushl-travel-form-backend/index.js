const express = require('express');
const { connect } = require('./db');

require('dotenv').config();
const cors = require('cors');
const { productRoute } = require('./routes/product.js');
const { documentRoutes } = require('./routes/document.js');

const app = express();

app.use(express.json());
app.use(cors());


app.use('/product', productRoute);
app.use('/document', documentRoutes);
app.get('/', async(req,res)=>{
    try {
        res.status(200).json({message : "OK"})
    } catch (error) {
        res.status(500).json({message : "Error"})
    }
})
app.listen(process.env.PORT, async () => {
    try {
        await connect;
        console.log(`connecting to db`);
        console.log(`listening on ${process.env.PORT}`);

    } catch (error) {
        console.error(`something went wrong`);
        console.error(error)
    }
})