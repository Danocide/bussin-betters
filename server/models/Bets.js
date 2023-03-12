const { Schema, model } = require('mongoose');

const betSchema = new Schema({

    game: {
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

    result: {
        type: String,
        enum: ['Win', 'Lose', 'Push'],
    },

    createdAt: {
        type: Date,
        default: Date.now,
        get: (timestamp) => dateFormat(timestamp),
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