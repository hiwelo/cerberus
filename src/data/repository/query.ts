import { gql } from 'apollo-boost';

export default gql`
  query getRepository($name: String!, $owner: String!) {
    repository(name: $name, owner: $owner) {
      description
      id
      name
      owner {
        avatarUrl
        id
        login
        url
      }
      url
    }
  }
`;
