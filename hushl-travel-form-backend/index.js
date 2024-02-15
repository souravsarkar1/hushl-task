const express = require('express');
const { connect } = require('./db');
const { productRoute } = require('./routes/product/product');
// const { documentRoutes } = require('./routes/document/document');
require('dotenv').config();
const cors = require('cors');
const { documentRoutes } = require('./Routes/Document/document');
// const { default: documentRoutes } = require('./Routes/Document/document');
// const { generateUploadS3Link } = require('./Routes/Document/document');
const app = express();

app.use(express.json());
app.use(cors());

app.use('/product', productRoute);
app.use('/document', documentRoutes )
app.listen(process.env.PORT, async()=>{
    try {
        await connect;
        console.log(`connecting to db`);
        console.log(`listening on ${process.env.PORT}`);
        
    } catch (error) {
        console.error(`something went wrong`);
        console.error(error)
    }
})