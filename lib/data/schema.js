"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _graphql = require("graphql");

var _Message = _interopRequireDefault(require("./types/Message"));

var schema = new _graphql.GraphQLSchema({
  query: new _graphql.GraphQLObjectType({
    name: 'Query',
    fields: {
      message: {
        type: _Message.default
      }
    }
  })
});
var _default = schema;
exports.default = _default;