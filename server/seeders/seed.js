const db = require('../config/connection');
const { User, Bets, Payment, Transaction } = require('../models');
const userSeeds = require('./userSeeds.json');
const betSeeds = require('./betSeeds.json');
const paymentSeeds = require('./paymentSeeds.json');
const transactionSeeds = require('./transactionSeeds.json');

db.once('open', async () => {
    try {
        await User.deleteMany({});
        await Bets.deleteMany({});
        await Payment.deleteMany({});
        await Transaction.deleteMany({});
    
        await User.create(userSeeds);
        await Bets.create(betSeeds);
        await Payment.create(paymentSeeds);
        await Transaction.create(transactionSeeds);
    
        console.log('all done!');
        process.exit(0);
    } catch (err) {
        throw err;
    }
    });