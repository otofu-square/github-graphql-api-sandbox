import { makeExecutableSchema } from 'graphql-tools';

const typeDefs = `
  type Link {
    id: ID!
    url: String!
    description: String!
  }
`;

export default makeExecutableSchema({ typeDefs });
