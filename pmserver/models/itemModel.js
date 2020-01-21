var mongoose = require('mongoose');

var itemSchema = new mongoose.Schema({
	item_name: {
		type: String,
		required: true,
		trim: true
	},
	item_description: {
		type: String,
		required: true,
		trim: true
	},
	buyer: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User',
		required: true
	},
	item_price: {
		type: Number,
		required: true,
		trim: true
	},
	status: {
		type: Number,
		required: true,
		trim: true,
		default: 1,
	}
});

itemSchema.index({item_name: 'text', item_description: 'text'});

var Item = mongoose.model('Item', itemSchema);
module.exports = Item;
