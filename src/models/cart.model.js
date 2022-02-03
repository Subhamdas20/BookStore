import { Schema, model } from 'mongoose';

const cartSchema = new Schema(
    {
        bookName: {
        type: String,
        required: true
      },
     
      description: {
        type: String,
        required: true
      },
      author: {
        type: String,
        required: true
      },
     
      price:{
        type : String,
        required:true
      },
      quantity:{
          type: Number,
          required : true
      },
      user_Email:{
          type : String,
          required: true
      },
      user_id:{
          type:String,
          required: true
      },
      product_id:{
          type : String,
          required: true
      }
    },
  {
    timestamps: true
  }
);

export default model('Cart', cartSchema);