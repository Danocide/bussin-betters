const { Schema, model } = require('mongoose');

const betSchema = new Schema({
    bet: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },

    amount: {
        type: Number,
        required: true,
        minlength: 1,
    },

    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },

    payment: {
        type: Schema.Types.ObjectId,
        ref: 'Payment',
    },

    transaction: {
        type: Schema.Types.ObjectId,
        ref: 'Transaction',
    }
});

const Bets = model('Bets', betSchema);

module.exports = Bets;