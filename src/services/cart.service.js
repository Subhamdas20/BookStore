import cartModel from "../models/cart.model";
import Books from "../models/product.model";


export const addToCart = async (req, res) => {
    let productData = await Books.find({ _id: req._id });
    if (productData) {
        let productincart = await cartModel.findOne({ product_id: productData[0]._id })
        if (!productincart) { 
        let newCart = new cartModel({
            bookName: productData[0].bookName,
            description: productData[0].description,
            author: productData[0].author,
            price: productData[0].price,
            quantity: 1,
            user_Email: req.data.email,
            user_id: req.data.id,            
            product_id: productData[0]._id
        })
        return await newCart.save()}
    else {
        console.log(productincart.quantity);
        return cartModel.updateOne({product_id: req._id },{$set : { quantity: (productincart.quantity + 1) }})
    }}
}


export const updateCart = async (req) => {
    let cartData = await cartModel.findOne({ user_id: req.data.id, _id: req._id });
    if (cartData) {
        let cart = {
            quantity: req.quantity ? req.quantity : cartData.quantity,
        }
        return cartModel.updateOne({ user_id: req.data.id, _id: req._id }, cart)
    }
    else {
        return cartData
    }
};


export const removeCartItems = async (req) => {
    let cartData = await cartModel.deleteMany({ user_id: req.data.id, product_id: req.product_id });
    return cartData;
};

export const getCartItems = async (req) => {
    let cartData = await cartModel.find({ user_id: req.data.id });
    return cartData;
};