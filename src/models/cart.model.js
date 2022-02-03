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
      category:{
        type : String,
        required:true
      },
      price:{
        type : String,
        required:true
      },
      quantity:{
          type: String,
          required : true
      }
    },
  {
    timestamps: true
  }
);

export default model('Cart', cartSchema);