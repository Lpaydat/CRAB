import {
  Environment, Network, Store, RecordSource,
} from 'relay-runtime';
import RelayQueryResponseCache from 'relay-runtime/lib/RelayQueryResponseCache';
import 'whatwg-fetch'; /* global fetch */

// prepare caching
const oneMinute = 60 * 1000;
const cache = new RelayQueryResponseCache({ size: 250, ttl: oneMinute });

const fetchQuery = (operation, variables, cacheConfig) => {
  const queryId = operation.text;
  const isMutation = operation.operationKind === 'mutation';
  const isQuery = operation.operationKind === 'query';
  const forceFetch = cacheConfig && cacheConfig.force;

  // try to get data from cache on queries
  const fromCache = cache.get(queryId, variables);
  if (isQuery && fromCache !== null && !forceFetch) {
    return fromCache;
  }

  // otherwise, fetch data from server
  return fetch('http://localhost:9002/graphql', {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({
      query: operation.text,
      variables,
    }),
  })
    .then(res => res.json())
    .then((json) => {
      // update cache on queris
      if (isQuery && json) {
        cache.set(queryId, variables, json);
      }
      // clear cache on mutation
      if (isMutation) {
        cache.clear();
      }

      return json;
    });
};

// create environment
const environment = new Environment({
  network: Network.create(fetchQuery),
  store: new Store(new RecordSource()),
});

export default environment;
