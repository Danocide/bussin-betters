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
  mutation addUser($username: String!, $email: String!, $password: String!, $accountBalance: Int!, $description: String!) {
    addUser(username: $username, email: $email, password: $password, accountBalance: $accountBalance, description: $description) {
      token
      user {
        _id
        username
        email
        accountBalance
        description
      }
    }
  }
`;

export const UPDATE_USER = gql`
  mutation updateUser($username: String!, $email: String!, $password: String!, $accountBalance: Int!) {
    updateUser(username: $username, email: $email, password: $password, accountBalance: $accountBalance) {
      _id
      username
      email
      accountBalance
      }
    }
`;

export const DELETE_USER = gql`
  mutation deleteUser($id: ID!) {
    deleteUser(id: $id) {
      _id
      username
      email
      accountBalance
    }
  }
`;

export const ADD_BET = gql`
  mutation addBet($game: String!, $amount: Float!, $result: String!) {
    addBet(game: $game, amount: $amount, result: $result) {
      _id
      game
      amount
      result
      user {
        _id
        username
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
        username
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
        username
        email
        accountBalance
      }
    }
  }
`;

export const ADD_TRANSACTION = gql`
  mutation addTransaction($amount: Int!, $transType: String!) {
    addTransaction(amount: $amount, transType: $transType) {
      _id
      amount
      transType
      user {
        _id
        username
        email
        accountBalance
      }
    }
  }
`;

export const UPDATE_TRANSACTION = gql`
  mutation updateTransaction($id: ID!, $amount: Int!, $transType: String!) {
    updateTransaction(id: $id, amount: $amount, transType: $transType) {
      _id
      amount
      transType
      user {
        _id
        username
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
      transType
      user {
        _id
        username
        email
        accountBalance
      }
    }
  }
`;

export const ADD_PAYMENT = gql`
  mutation addPayment($amount: Int!) {
    addPayment(amount: $amount) {
      _id
      amount
      
      user {
        _id
        username
        email
        accountBalance
      }
    }
  }
`;

export const UPDATE_PAYMENT = gql`
    mutation updatePayment($id: ID!, $amount: Int!) {
        updatePayment(id: $id, amount: $amount) {
            _id
            amount
            user {
                _id
                username
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
            user {
                _id
                username
                email
                accountBalance
            }
        }
    }
`;

export const UPDATE_USER_DESCRIPTION = gql`
    mutation updateUserDescription($description: String!) {
        updateUserDescription(description: $description) {
            _id
            username
            email
            accountBalance
            description
        }
    }
`;
