import { Schema, model, SchemaTypes } from "mongoose";


const OrderSchema = new Schema({
	products: [{
        id:{ type: Schema.Types.ObjectId, ref: 'Product'},
        quantity: Number,
        price: Number,
        name: String
    }],
    name: {
        type: String,
        required: true
    },
    username: {
        type: String
    },
    phone: {
        type: String,
        required:true
    },
    address: {
        type: String,
        required:true
    },
    date: {
        type: String,
        required: true
    },
    total: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        required:true
    }
})


export default model('Order', OrderSchema)