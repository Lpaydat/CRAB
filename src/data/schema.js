import { GraphQLSchema, GraphQLObjectType } from 'graphql';
import Message from './types/Message';

const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    fields: {
      message: { type: Message },
    },
  }),
});

export default schema;
