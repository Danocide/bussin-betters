import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query {
    user {
      _id
      username
      email
      bets {
        _id
        game
        amount
        result
      }
    }
  }
`;

export const QUERY_USER_BY_ID = gql`
  query user($id: ID!) {
    user(id: $id) {
      _id
      username
      email
      bets {
        _id
        game
        amount
        result
      }
    }
  }
`;

export const QUERY_BETS = gql`
  query {
    bets {
      _id
      game
      amount
      result
      user {
        _id
        username
        email
      }
    }
  }
`;

export const QUERY_BET_BY_ID = gql`
  query bet($id: ID!) {
    bet(id: $id) {
      _id
      game
      amount
      result
      user {
        _id
        username
        email
      }
    }
  }
`;

export const QUERY_BET_BY_USER = gql`
  query bet($user: ID!) {
    bet(user: $user) {
      _id
      game
      amount
      result
      user {
        _id
        username
        email
      }
    }
  }
`;

export const QUERY_TRANSACTIONS = gql`
  query {
    transactions {
      _id
      amount
      type
      user {
        _id
        username
        email
      }
    }
  }
`;
export const QUERY_TRANS_BY_ID = gql`
  query transaction($id: ID!) {
    transaction(id: $id) {
      _id
      amount
      type
      user {
        _id
        username
        email
      }
    }
  }
`;

export const QUERY_TRANS_BY_USER = gql`
  query transaction($user: ID!) {
    transaction(user: $user) {
      _id
      amount
      type
      user {
        _id
        username
        email
      }
    }
  }
`;


export const QUERY_PAYMENTS = gql`
  query {
    payments {
      _id
      amount
      user {
        _id
        username
        email
      }
    }
  }
`;



export const QUERY_PAY_BY_ID = gql`
  query payment($id: ID!) {
    payment(id: $id) {
      _id
      amount
      user {
        _id
        username
        email
      }
    }
  }
`;

export const QUERY_PAY_BY_USER = gql`
  query payment($user: ID!) {
    payment(user: $user) {
      _id
      amount
      user {
        _id
        username
        email
      }
    }
  }
`;


