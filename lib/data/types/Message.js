"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _graphql = require("graphql");

var Message = new _graphql.GraphQLObjectType({
  name: 'Message',
  fields: {
    id: {
      type: new _graphql.GraphQLNonNull(_graphql.GraphQLID)
    },
    text: {
      type: _graphql.GraphQLString
    }
  }
});
var _default = Message;
exports.default = _default;