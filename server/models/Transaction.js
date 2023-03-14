const { Schema, model } = require('mongoose');

const transactionSchema = new Schema({

    amount: {
        type: Number,
        required: true,
        minlength: 1,
    },

    transType: {
        type: String,
        enum: ['deposit', 'withdrawal'],
        index: false,
    },

    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },

    payment: {
        type: Schema.Types.ObjectId,
        ref: 'Payment',
    },

    bets: {
        type: Schema.Types.ObjectId,
        ref: 'Bets',
    },

});

const Transaction = model('Transaction', transactionSchema);

module.exports = Transaction;
