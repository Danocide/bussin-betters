const { AuthenticationError } = require('apollo-server-express');
const { User, Payment, Transaction, Bets} = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {

      me: async (parent, args, context) => {
        if (context.user) {
          return User.findOne({ _id: context.user._id });
        }
        throw new AuthenticationError('You need to be logged in!');
      },

        user: async (parent, { id }) => {
          if (id) {
            return User.findById(id);
          }
          return User.find();
        },
        bets: async (parent, { id, user }) => {
          const params = {};
          if (id) {
            params._id = id;
          }
          if (user) {
            params.user = user;
          }
          return Bets.find(params).sort({ createdAt: -1 });
        },
        transaction: async (parent, { id, user }) => {
          const params = {};
          if (id) {
            params._id = id;
          }
          if (user) {
            params.user = user;
          }
          return Transaction.find(params).sort({ createdAt: -1 });
        },
        payment: async (parent, { id, user }) => {
          const params = {};
          if (id) {
            params._id = id;
          }
          if (user) {
            params.user = user;
          }
          return Payment.find(params).sort({ createdAt: -1 });
        },
      },

    Mutation: {
      addUser: async (parent, { username, email, password, accountBalance, description }) => {
        const user = await User.create({ username, email, password, accountBalance, description });
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

        async logout(parent, args, context) {
          const user = context.user;
          if (!user) {
            throw new AuthenticationError('You need to be logged in to perform this action.');
          }
      
          context.token = '';
          context.user = null;
      
          return { token: null, user: null };
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
