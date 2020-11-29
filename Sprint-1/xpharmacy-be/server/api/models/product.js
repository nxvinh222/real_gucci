import { Schema, model } from "mongoose";


const ProductSchema = new Schema({
	name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    info: {
        type:String,
        required:true
    },
    image: {
        type: String,
        required:true
    },
    category: {
        type: String,
        required:true
    },
    sold: {
        type: Number,
        default: 0,
        required: true
    }
})


export default model('Product', ProductSchema)