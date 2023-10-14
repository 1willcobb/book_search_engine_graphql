import { gql } from '@apollo/client';


export const QUERY_ME = gql`
  query me($username: String!) {
    user(username: $username) {
      _id
      username
      email
      bookCount
      # savedBooks: [Book]
    }
  }
`;

