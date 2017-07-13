import * as express from 'express';
import * as bodyParser from 'body-parser';
import { graphqlExpress } from 'graphql-server-express';

import schema from './schema';
import { PORT } from './config';

const app = express();

app.use('/graphql', bodyParser.json(), graphqlExpress({ schema }));

app.listen(PORT, () => {
  console.log(`Hackernews GraphQL server running on port ${PORT}.`);
});
