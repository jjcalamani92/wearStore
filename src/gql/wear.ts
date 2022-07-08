import { gql } from "@apollo/client";

export const PRODUCTS_PAGINATION = gql`
  query ListWearsWithCursor($args: ConnectionArgs!, $site: String!) {
    listWearsWithCursor(args:$args, site: $site) {
      page {
        edges {
          
          cursor
          node{
            _id
            article{
              title
            }
          }
        }
        pageInfo {
          startCursor
          endCursor
          hasPreviousPage
          hasNextPage
        }
      }
      pageData{
        count
        limit
        offset
      }
    }
  }
`;
