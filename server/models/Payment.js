const { Schema, model } = require('mongoose');

const paymentSchema = new Schema({

    payment: {
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

    bet: {
        type: Schema.Types.ObjectId,
        ref: 'Bets',
    },

    transaction: {
        type: Schema.Types.ObjectId,
        ref: 'Transaction',
    },

});

const Payment = model('Payment', paymentSchema);

module.exports = Payment;
