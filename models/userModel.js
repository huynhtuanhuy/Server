const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: String,
    email: String,
    avatarUrl: String,
    Gender: String,
    shop: {type: Schema.Types.ObjectId, ref: 'Shop'},
    order: [{
        product: {type: Schema.Types.ObjectId, ref: 'Product'},
        amount: Number
    }]
},{
    timestamps: true
})

module.exports = mongoose.model("User", UserSchema);