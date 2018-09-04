"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _relayRuntime = require("relay-runtime");

var _RelayQueryResponseCache = _interopRequireDefault(require("relay-runtime/lib/RelayQueryResponseCache"));

require("whatwg-fetch");

/* global fetch */
// prepare caching
var oneMinute = 60 * 1000;
var cache = new _RelayQueryResponseCache.default({
  size: 250,
  ttl: oneMinute
});

var fetchQuery = function fetchQuery(operation, variables, cacheConfig) {
  var queryId = operation.text;
  var isMutation = operation.operationKind === 'mutation';
  var isQuery = operation.operationKind === 'query';
  var forceFetch = cacheConfig && cacheConfig.force; // try to get data from cache on queries

  var fromCache = cache.get(queryId, variables);

  if (isQuery && fromCache !== null && !forceFetch) {
    return fromCache;
  } // otherwise, fetch data from server


  return fetch('http://localhost:9002/graphql', {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify({
      query: operation.text,
      variables: variables
    })
  }).then(function (res) {
    return res.json();
  }).then(function (json) {
    // update cache on queris
    if (isQuery && json) {
      cache.set(queryId, variables, json);
    } // clear cache on mutation


    if (isMutation) {
      cache.clear();
    }

    return json;
  });
}; // create environment


var environment = new _relayRuntime.Environment({
  network: _relayRuntime.Network.create(fetchQuery),
  store: new _relayRuntime.Store(new _relayRuntime.RecordSource())
});
var _default = environment;
exports.default = _default;