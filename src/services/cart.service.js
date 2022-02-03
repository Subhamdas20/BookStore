import cartModel from "../models/cart.model";
import Books from "../models/product.model";


export const addToCart = async (req, res) => {
    let productData = await Books.find({ _id: req._id});
    console.log(req);
    if(productData){
        let newEmp = new cartModel({
            bookName: productData[0].bookName,
              description:productData[0].description,
              author: productData[0].author,
              category: productData[0].category,
              price: productData[0].price,
              quantity: "1",
              user_Email : req.data.email,
              user_id : req.data.id,
              product_id: productData[0]._id
            
        })
        return await newEmp.save()
    }
};

export const updateCart = async (req) => {
    let cartData = await cartModel.findOne({ user_id : req.data.id, _id: req._id });
    if (cartData) {
        let cart = {
            quantity: req.quantity ? req.quantity : cartData.quantity,
        }
        return cartModel.updateOne({ user_id : req.data.id, _id: req._id }, cart)
    }
    else {
        return employeeData
    }
};


export const removeCartItems = async (req) => {
    let cartData = await cartModel.deleteMany({ user_id: req.data.id, product_id : req.product_id });
    return cartData;
};