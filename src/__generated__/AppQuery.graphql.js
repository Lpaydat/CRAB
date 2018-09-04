/**
 * @flow
 * @relayHash 88d58a1f132cc691c8f2af9ef9b2003e
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type Message_msg$ref = any;
export type AppQueryVariables = {||};
export type AppQueryResponse = {|
  +message: ?{|
    +$fragmentRefs: Message_msg$ref
  |}
|};
export type AppQuery = {|
  variables: AppQueryVariables,
  response: AppQueryResponse,
|};
*/


/*
query AppQuery {
  message {
    ...Message_msg
    id
  }
}

fragment Message_msg on Message {
  id
  text
}
*/

const node/*: ConcreteRequest*/ = {
  "kind": "Request",
  "operationKind": "query",
  "name": "AppQuery",
  "id": null,
  "text": "query AppQuery {\n  message {\n    ...Message_msg\n    id\n  }\n}\n\nfragment Message_msg on Message {\n  id\n  text\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "AppQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "message",
        "storageKey": null,
        "args": null,
        "concreteType": "Message",
        "plural": false,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "Message_msg",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "AppQuery",
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "message",
        "storageKey": null,
        "args": null,
        "concreteType": "Message",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "id",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "text",
            "args": null,
            "storageKey": null
          }
        ]
      }
    ]
  }
};
// prettier-ignore
(node/*: any*/).hash = '2c6dbcf82697e46d91aea8a07bfc67d7';
module.exports = node;
