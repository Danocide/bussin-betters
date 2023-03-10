const { Schema, model } = require('mongoose');

const paymentSchema = new Schema({   
    amount: {
        type: Number,
        required: true,
        minlength: 1,
    },

    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },

    bets: {
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
