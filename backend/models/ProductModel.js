import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  imageUrl: { type: String, required: true },
  productName: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
  quantity: { type: Number, required: true },
  productId: { type: String, required: true }
});

const Product = mongoose.model('Product', productSchema);

export default Product;
