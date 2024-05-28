import Product from '../models/ProductModel.js';

export const addProduct=async (req,res)=>{
    try{
        const product= new Product(req.body);
        const savedProduct= await product.save();
        res.status(201).json(savedProduct);
    }
    catch(err){
        res.status(500).json({message:err.message});
    }
}

export const getProducts= async (req,res)=>{
    try{
        const products= await Product.find();
        res.status(200).json(products);
    }
    catch(err){
        res.status(500).json({ message: error.message });
    }
}

export const getProductById = async (req, res) => {
    try {
      const product = await Product.findById(req.params.id);
      if (!product) {
        return res.status(404).json({ message: 'Product not found' });
      }
      res.status(200).json(product);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

  export const updateProduct = async (req, res) => {
    try {
      const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!product) {
        return res.status(404).json({ message: 'Product not found' });
      }
      res.status(200).json(product);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

  export const deleteProduct = async (req, res) => {
    try {
      const product = await Product.findByIdAndDelete(req.params.id);
      if (!product) {
        return res.status(404).json({ message: 'Product not found' });
      }
      res.status(200).json({ message: 'Product deleted successfully' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };