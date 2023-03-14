const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    username: String
    email: String!
    password: String!
    accountBalance: Int!
    bets: [Bets!]!
    transaction: [Transaction!]!
    payment: [Payment!]!
  }

  type Bets {
    _id: ID!
    user: User!
    game: String!
    amount: Float!
    result: String!
    createdAt: String
    transaction: [Transaction!]!
    payment: [Payment!]!
  }

    type Payment {
    _id: ID!
    user: User!
    amount: Float!
    bets: [Bets!]!
    transaction: [Transaction!]!
}

    type Transaction {
    _id: ID!
    user: User!
    amount: Float!
    transType: String!
    bets: [Bets!]!
}

type Auth {
    token: ID
    user: User
  }

    type Query {
    user: [User!]!
    userId(id: ID!): User
    bets: [Bets!]!
    betsById(id: ID!): Bets
    betsByUser(user: ID!): [Bets!]!
    transaction: [Transaction!]!
    transactionById(id: ID!): Transaction
    transactionByUser(user: ID!): [Transaction!]!
    payment: [Payment!]!
    paymentbyId(id: ID!): Payment
    paymentbyUser(user:ID!): [Payment!]!
    me: User
  }

    type Mutation {
    addUser(username: String!, email: String!, password: String!, accountBalance: Int!): Auth
    login(email: String!, password: String!): Auth
    logout: Auth
    updateUser(id: ID!, username: String!, email: String! password: String!, accountBalance: Int!): User
    addBet(user: ID!, game: String!, amount: Float!): Bets
    updateBet(id: ID!, user: ID!, game: String!, amount: Float!, result: String!): Bets
    deleteBet(id: ID!): Bets
    addPayment(user: ID!, amount: Float!): Payment
    deletePayment(id: ID!): Payment
    addTransaction(user: ID!, amount: Float!, transType: String!): Transaction
    updateTransaction(id: ID!, user: ID!, amount: Float!, transType: String!): Transaction
    deleteTransaction(id: ID!): Transaction
    deleteUser(id: ID!): User
    }

    `;

    module.exports = typeDefs;
