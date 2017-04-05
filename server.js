const express = require('express')
const graphqlHTTP = require('express-graphql')
const { buildSchema } = require('graphql')

const schema = buildSchema(`
  type Query {
    rollThreeDice(numDice: Int!, numSides: Int): [Int]
  }
`)

const root = {
  rollThreeDice: (args) => {
    const output = []
    for (let i = 0; i < args.numDice; i++) {
      output.push(1 + Math.floor(Math.random() * (args.numSides || 6)))
    }
    return output
  },
}

const app = express()
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}))

app.listen(4000);
console.log('Running a GraphQL API Server at localhost:4000/graphql')
