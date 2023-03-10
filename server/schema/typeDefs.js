const { gql } = require('apollo-server');

const typeDefs = gql`
  type User {
    _id: ID!
    user: String!
    password: String!
    accountBalance: Float!
    bets: [Bet!]!
    transactions: [Transaction!]!
    payments: [Payment!]!
  }

  type Bets {
    _id: ID!
    user: User!
    game: String!
    amount: Float!
    result: String!
    createdAt: String
    transactions: [Transaction!]!
    payments: [Payment!]!
  }

    type Payment {
    _id: ID!
    user: User!
    amount: Float!
    bets: [Bet!]!
    transactions: [Transaction!]!
}

    type Transaction {
    _id: ID!
    user: User!
    amount: Float!
    type: String!
    bets: [Bet!]!
}

type Auth {
    token: ID!
    user: User
  }

    type Query {
    users: [User!]!
    user(id: ID!): User
    bets: [Bet!]!
    transactions: [Transaction!]!
    payments: [Payment!]!
  }

    type Mutation {
    addUser(user: String!, password: String!, accountBalance: Float!): User
    addBet(user: ID!, game: String!, amount: Float!): Bet
    addPayment(user: ID!, amount: Float!): Payment
    addTransaction(user: ID!, amount: Float!, type: String!): Transaction
    deleteUser(id: ID!): User
    }

    `;

    module.exports = typeDefs;
