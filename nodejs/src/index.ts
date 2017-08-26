import ApolloClient, { createNetworkInterface } from "apollo-client";
import gql from "graphql-tag";
import "isomorphic-fetch";

const accessToken = process.env.GITHUB_ACCESS_TOKEN;

const client = new ApolloClient({
  networkInterface: createNetworkInterface({
    uri: "https://api.github.com/graphql",
    opts: {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    },
  }),
});

client
  .query({
    query: gql`
      query {
        viewer {
          login
        }
      }
    `,
  })
  .then(data => console.log(data))
  .catch(error => console.error(error));
