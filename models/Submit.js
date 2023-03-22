const mongoose = require('mongoose');
const {Schema} = mongoose;
const ProductSchema = new Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'user'
    },
    name: {
        type: String
    },
    phone: {
        type: Number
    },
    email: {
        type: String
    },
    hobby: {
        type: String
    },
});
module.exports = mongoose.model('Submit', ProductSchema);