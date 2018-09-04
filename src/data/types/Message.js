import {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLID,
  GraphQLString,
} from 'graphql';

const Message = new GraphQLObjectType({
  name: 'Message',
  fields: {
    id: { type: new GraphQLNonNull(GraphQLID) },
    text: { type: GraphQLString },
  },
});

export default Message;
