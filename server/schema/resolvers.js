const { AuthenticationError } = require('apollo-server-express');
const { User, Payment, Transaction, Bets} = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        user: async () => {
            return User.find();
        },
        user: async (parent, { id }) => {
            return User.findById(id);
          },
          bets: async () => {
            return Bets.find();
          },
          bets: async (parent, { id }) => {
            return Bets.findById(id);
        },
          bets: async (parent, { user }) => {
            const params = user ? { user } : {};
            return Bets.find(params).sort({ createdAt: -1 });
          },
          transaction: async () => {
            return Transaction.find();
          },
          transaction: async(parent, { id }) => {
            return Transaction.findById(id);
          },
            transaction: async (parent, { user }) => {  
            const params = user ? { user } : {};
            return Transaction.find(params).sort({ createdAt: -1 });
            },

          payments: async () => {
            return Payment.find();
          },
            payments: async(parent, { id }) => {
                return Payment.findById(id);
        },
            payments: async (parent, { user }) => {
            const params = user ? { user } : {};  
            return Payment.find(params).sort({ createdAt: -1 });
            },
    },

    Mutation: {
        addUser: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);
            return { token, user };
        },
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });
            if (!user) {
                throw new AuthenticationError('Incorrect credentials');
            }
            const correctPw = await user.isCorrectPassword(password);
            if (!correctPw) {
                throw new AuthenticationError('Incorrect credentials');
            }
            const token = signToken(user);
            return { token, user };
        },

        logout: async (parent, args, context) => {
            if (context.user) {
                context.user = null;
                return { message: 'You have been logged out!' };
            }
            
        },

        updateUser: async (parent, args, context) => {
            if (context.user) {
                return User.findByIdAndUpdate(
                    { _id: context.user._id },
                    args,
                    {
                        new: true,
                        runValidators: true
                    }
                );
            }
            throw new AuthenticationError('You need to be logged in!');
        },

        deleteUser: async(parent, args, context) => {
            if (context.user) {
                return User.findByIdAndDelete(
                    { _id: context.user._id },
                    args,
                    {
                        new: true,
                        runValidators: true
                    }
                );
            }
            throw new AuthenticationError('You need to be logged in!');
        },

        addBet: async (parent, args, context) => {
            try {
              
              if (!context.user) {
                throw new Error('User not authenticated');
              }
  
              const user = await User.findById(context.user._id);
              if (user.balance < args.amount) {
                throw new Error('Insufficient funds');
              }
    
              const bet = await Bets.create({ ...args, user: context.user._id });
          
            
              user.balance -= args.amount;
              await user.save();
          
              return bet;
            } catch (error) {
              console.error(error);
              throw new Error('Error creating bet');
            }
        },
          updateBet: async (parent, args, context) => {
            if (context.user) {
                return Bets.findByIdAndUpdate(
                    { _id: context.user._id },
                    args,
                    {
                        new: true,
                        runValidators: true
                    }
                );
            }
            throw new AuthenticationError('You need to be logged in!');
        },

        deleteBet: async (parent, { id }, context) => {
            if (context.user) {
                const bet = await Bets.findByIdAndDelete(id);
                return bet;
            }
            throw new AuthenticationError('You need to be logged in!');
        },

        addPayment: async (parent, args, context) => {
            if (context.user) {
                const payment = await Payment.create({ ...args, user: context.user._id });
                return payment;
            }
            throw new AuthenticationError('You need to be logged in!');
        },

        deletePayment: async (parent, { id }, context) => {
            if (context.user) {
                const payment = await Payment.findByIdAndDelete(id);
                return payment;
            }
            throw new AuthenticationError('You need to be logged in!');
        },

        addTransaction: async (parent, args, context) => {
            if (context.user) {
                const transaction = await Transaction.create({ ...args, user: context.user._id });
                return transaction;
            }
            throw new AuthenticationError('You need to be logged in!');
        },

        deleteTransaction: async (parent, { id }, context) => {
            if (context.user) {
                const transaction = await Transaction.findByIdAndDelete(id);
                return transaction;
            }
            throw new AuthenticationError('You need to be logged in!');
        },
    }

};

module.exports = resolvers;
