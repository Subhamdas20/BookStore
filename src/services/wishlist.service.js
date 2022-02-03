
import Books from "../models/product.model";
import wishlistModel from "../models/wishlist.model";

export const addToWishList = async (req, res) => {
    let productData = await Books.find({ _id: req._id });
    if (productData) {
        let productincart = await wishlistModel.findOne({ product_id: productData[0]._id })
        if (!productincart) {
            let newWishlist = new wishlistModel({
                bookName: productData[0].bookName,
                description: productData[0].description,
                author: productData[0].author,
                price: productData[0].price,
                quantity: 1,
                user_Email: req.data.email,
                user_id: req.data.id,
                product_id: productData[0]._id
            })
            return await newWishlist.save()
        }
    }

}

export const removewishlistItems = async (req) => {
    let wishlistData = await wishlistModel.deleteMany({ user_id: req.data.id, product_id: req.product_id });
    return wishlistData;
};

export const getwishlistItems = async (req) => {
    let wishlistData = await wishlistModel.find({ user_id: req.data.id });
    return wishlistData;
};