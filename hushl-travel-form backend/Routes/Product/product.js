const express = require('express');
const { ProductModel } = require('../../Model/Product/product');

const productRoute = express.Router();

// GET all products
productRoute.get('/', async (req, res) => {
    try {
        // Extract pagination parameters from the request query
        const { page = 1, pageSize = 5 } = req.query;

        // Convert page and pageSize to numbers
        const pageNumber = parseInt(page);
        const pageSizeNumber = parseInt(pageSize);

        // Calculate the number of documents to skip
        const skip = (pageNumber - 1) * pageSizeNumber;

        // Fetch products with pagination from the database
        const products = await ProductModel.find()
            .skip(skip)
            .limit(pageSizeNumber);

        // Respond with a 200 status and the retrieved products in JSON format
        res.status(200).json({ products, currentPage: pageNumber, pageSize: pageSizeNumber });
    } catch (error) {
        // Handle any errors that occur during the database query or response
        console.error('Error fetching products:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

//  GET SINGLE PRODUCT

productRoute.get('/:id', async (req,res)=>{
    try {
      const id = req.params.id;
      const product = await ProductModel.findById(id);
      res.status(200).json({product});
    } catch (error) {
        console.error('Error fetching products:', error);
        res.status(500).json({ error: 'Internal Server Error' }); 
    }
})

// POST A NEW PRODUCT
productRoute.post('/', async(req,res)=>{
    try {
        const data = req.body;
        const product = new ProductModel(data);
        await product.save();
        res.status(201).json({message : "Diteals is Added",product});
    } catch (error) {
        console.error('Error fetching products:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
})

// UPDATE PRODUCT

productRoute.put('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const data = req.body;

        // Ensure the provided ID is valid
        if (!id.match(/^[0-9a-fA-F]{24}$/)) {
            return res.status(400).json({ message: "Invalid ID format" });
        }

        // Find the product by ID and update it with the new data
        const product = await ProductModel.findByIdAndUpdate(id, data, { new: true });

        // Check if the product exists
        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }

        // Respond with the updated product
        res.status(200).json(product);
    } catch (error) {
        // Handle any errors that occur during the update or response
        console.error('Error updating product:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});


// DELETE PRODUCT

productRoute.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;

        // Ensure the provided ID is valid
        if (!id.match(/^[0-9a-fA-F]{24}$/)) {
            return res.status(400).json({ message: "Invalid ID format" });
        }

        // Find the product by ID and remove it
        const deletedProduct = await ProductModel.findByIdAndDelete(id);

        // Check if the product exists
        if (!deletedProduct) {
            return res.status(404).json({ message: "Product not found" });
        }

        // Respond with a success message
        res.status(200).json({ message: "Product deleted successfully" });
    } catch (error) {
        // Handle any errors that occur during the deletion or response
        console.error('Error deleting product:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});


module.exports = {productRoute};
