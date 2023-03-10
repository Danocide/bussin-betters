const { Schema, model } = require('mongoose');

const transactionSchema = new Schema({

    transaction: {
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

    bet: {
        type: Schema.Types.ObjectId,
        ref: 'Bets',
    },

});

const Transaction = model('Transaction', transactionSchema);

module.exports = Transaction;
