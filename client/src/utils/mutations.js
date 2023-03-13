import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const LOGOUT_USER = gql`
    mutation logout {
        logout {
            token
            user {
                _id
                username
            }
        }
    }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!, $accountBalance: Int!) {
    addUser(username: $username, email: $email, password: $password, accountBalance: $accountBalance) {
      token
      user {
        _id
        user
        email
        accountBalance
      }
    }
  }
`;

export const UPDATE_USER = gql`
  mutation updateUser($user: String!, $email: String!, $password: String!, $accountBalance: Int!) {
    updateUser(user: $user, email: $email, password: $password, accountBalance: $accountBalance) {
      _id
      user
      email
      accountBalance
      }
    }
`;

export const DELETE_USER = gql`
  mutation deleteUser($id: ID!) {
    deleteUser(id: $id) {
      _id
      user
      email
      accountBalance
    }
  }
`;

export const ADD_BET = gql`
  mutation addBet($game: String!, $amount: Int!, $result: String!) {
    addBet(game: $game, amount: $amount, result: $result) {
      _id
      game
      amount
      result
      user {
        _id
        user
        email
        accountBalance
      }
    }
  }
`;

export const UPDATE_BET = gql`
  mutation updateBet(
    $id: ID!
    $game: String!
    $amount: Int!
    $result: String!
  ) {
    updateBet(id: $id, game: $game, amount: $amount, result: $result) {
      _id
      game
      amount
      result
      user {
        _id
        user
        email
        accountBalance
      }
    }
  }
`;

export const DELETE_BET = gql`
  mutation deleteBet($id: ID!) {
    deleteBet(id: $id) {
      _id
      game
      amount
      result
      user {
        _id
        user
        email
        accountBalance
      }
    }
  }
`;

export const ADD_TRANSACTION = gql`
  mutation addTransaction($amount: Int!, $type: String!) {
    addTransaction(amount: $amount, type: $type) {
      _id
      amount
      type
      user {
        _id
        user
        email
        accountBalance
      }
    }
  }
`;

export const UPDATE_TRANSACTION = gql`
  mutation updateTransaction($id: ID!, $amount: Int!, $type: String!) {
    updateTransaction(id: $id, amount: $amount, type: $type) {
      _id
      amount
      type
      user {
        _id
        user
        email
        accountBalance
      }
    }
  }
`;
export const DELETE_TRANSACTION = gql`
  mutation deleteTransaction($id: ID!) {
    deleteTransaction(id: $id) {
      _id
      amount
      type
      user {
        _id
        user
        email
        accountBalance
      }
    }
  }
`;

export const ADD_PAYMENT = gql`
  mutation addPayment($amount: Int!, $type: String!) {
    addPayment(amount: $amount, type: $type) {
      _id
      amount
      type
      user {
        _id
        user
        email
        accountBalance
      }
    }
  }
`;

export const UPDATE_PAYMENT = gql`
    mutation updatePayment($id: ID!, $amount: Int!, $type: String!) {
        updatePayment(id: $id, amount: $amount, type: $type) {
            _id
            amount
            type
            user {
                _id
                user
                email
                accountBalance
            }
        }
    }
`;

export const DELETE_PAYMENT = gql`
    mutation deletePayment($id: ID!) {
        deletePayment(id: $id) {
            _id
            amount
            type
            user {
                _id
                user
                email
                accountBalance
            }
        }
    }
`;

