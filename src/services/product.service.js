import  Books  from "../models/product.model";

export const addProduct = async (req, res) => {
    
    let newBook = new Books({
        bookName : req.bookName,
        description:req.description,
        author: req.author,
        category:req.category,
        price: req.price
    })
    return await newBook.save()
   
};

export const getProduct = async (req) => {
    console.log(req);
    let employeeData = await Books.find({ _id: req._id});
    return employeeData;
};