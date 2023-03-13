const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    user: String!
    email: String!
    password: String!
    accountBalance: Float!
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
    type: String!
    bets: [Bets!]!
}

type Auth {
    token: ID!
    user: User
  }

    type Query {
    user: [User!]!
    user(id: ID!): User
    bets: [Bets!]!
    bets(id: ID!): Bets
    bets(user: ID!): [Bets!]!
    transaction: [Transaction!]!
    transaction(id: ID!): Transaction
    transaction(user: ID!): [Transaction!]!
    payment: [Payment!]!
    payment(id: ID!): Payment
    payment(user:ID!): [Payment!]!
  }

    type Mutation {
    addUser(user: String!, email: String!, password: String!, accountBalance: Float!): User
    login(user: String!, password: String!): Auth
    logout: Auth
    updateUser(id: ID!, user: String!, email: String! password: String!, accountBalance: Float!): User
    addBet(user: ID!, game: String!, amount: Float!): Bets
    updateBet(id: ID!, user: ID!, game: String!, amount: Float!, result: String!): Bets
    deleteBet(id: ID!): Bets
    addPayment(user: ID!, amount: Float!): Payment
    deletePayment(id: ID!): Payment
    addTransaction(user: ID!, amount: Float!, type: String!): Transaction
    updateTransaction(id: ID!, user: ID!, amount: Float!, type: String!): Transaction
    deleteTransaction(id: ID!): Transaction
    deleteUser(id: ID!): User
    }

    `;

    module.exports = typeDefs;
