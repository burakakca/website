import { gql } from '@apollo/client';

export const GET_REPOSITORIES = gql`
  {
    user(login: "burakakca") {
      pinnedItems(first: 6, types: [REPOSITORY]) {
        edges {
          node {
            ... on Repository {
              name
              description
              forkCount
              stargazers {
                totalCount
              }
              url
              id
              diskUsage
              primaryLanguage {
                name
                color
              }
            }
          }
        }
      }
    }
  }
`;

export const GET_USERINFO = gql`
  {
    user(login: "burakakca") {
      name
      bio
      isHireable
      avatarUrl
    }
  }
`;
