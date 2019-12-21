import { gql } from 'apollo-boost';

export default gql`
  query getRepository(
    $name: String!
    $owner: String!
    $count: Int!
    $countPR: Int!
  ) {
    repository(name: $name, owner: $owner) {
      deployments(last: $count) {
        edges {
          node {
            commit {
              abbreviatedOid
              associatedPullRequests(first: 1) {
                edges {
                  node {
                    author {
                      avatarUrl
                      login
                      url
                    }
                    closed
                    locked
                    merged
                    number
                    permalink
                    title
                    url
                  }
                }
              }
              message
              messageBody
              messageHeadline
              oid
            }
            commitOid
            creator {
              avatarUrl
              login
              url
            }
            description
            environment
            latestStatus {
              creator {
                avatarUrl
                login
                url
              }
              description
              environmentUrl
              state
              updatedAt
            }
            state
            task
            updatedAt
          }
        }
      }
      description
      id
      name
      owner {
        avatarUrl
        login
        url
      }
      pullRequests(states: OPEN, last: $countPR) {
        edges {
          node {
            author {
              avatarUrl
              login
              url
            }
            closed
            commits(last: 1) {
              edges {
                node {
                  commit {
                    abbreviatedOid
                    deployments(last: $count) {
                      edges {
                        node {
                          commitOid
                          creator {
                            avatarUrl
                            login
                            url
                          }
                          description
                          environment
                          latestStatus {
                            creator {
                              avatarUrl
                              login
                              url
                            }
                            description
                            environmentUrl
                            state
                            updatedAt
                          }
                          state
                          task
                          updatedAt
                        }
                      }
                    }
                  }
                }
              }
            }
            locked
            merged
            number
            permalink
            title
            url
          }
        }
      }
      url
    }
  }
`;
