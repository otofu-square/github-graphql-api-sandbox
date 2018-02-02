import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

import { App } from './App';
import { GRAPHQL_ENDPOINT } from './utils/urls';
import './globalStyles';
import registerServiceWorker from './registerServiceWorker';

const httpLink = createHttpLink({ uri: GRAPHQL_ENDPOINT });
const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: httpLink,
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root') as HTMLElement,
);
registerServiceWorker();
