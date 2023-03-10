const { Schema, model } = require('mongoose');

const betSchema = new Schema({
    bets: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },

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
        required: true,
        unique: true,
        trim: true,
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