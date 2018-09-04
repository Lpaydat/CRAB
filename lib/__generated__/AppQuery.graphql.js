/**
 * 
 * @relayHash b4718c2813dad79f953da37b05a26862
 */

/* eslint-disable */
'use strict';
/*::
import type { ConcreteRequest } from 'relay-runtime';
type Tester_msg$ref = any;
export type AppQueryVariables = {||};
export type AppQueryResponse = {|
  +message: ?{|
    +$fragmentRefs: Tester_msg$ref
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
    ...Tester_msg
    id
  }
}

fragment Tester_msg on Message {
  id
  text
}
*/

var node
/*: ConcreteRequest*/
= {
  "kind": "Request",
  "operationKind": "query",
  "name": "AppQuery",
  "id": null,
  "text": "query AppQuery {\n  message {\n    ...Tester_msg\n    id\n  }\n}\n\nfragment Tester_msg on Message {\n  id\n  text\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "AppQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [{
      "kind": "LinkedField",
      "alias": null,
      "name": "message",
      "storageKey": null,
      "args": null,
      "concreteType": "Message",
      "plural": false,
      "selections": [{
        "kind": "FragmentSpread",
        "name": "Tester_msg",
        "args": null
      }]
    }]
  },
  "operation": {
    "kind": "Operation",
    "name": "AppQuery",
    "argumentDefinitions": [],
    "selections": [{
      "kind": "LinkedField",
      "alias": null,
      "name": "message",
      "storageKey": null,
      "args": null,
      "concreteType": "Message",
      "plural": false,
      "selections": [{
        "kind": "ScalarField",
        "alias": null,
        "name": "id",
        "args": null,
        "storageKey": null
      }, {
        "kind": "ScalarField",
        "alias": null,
        "name": "text",
        "args": null,
        "storageKey": null
      }]
    }]
  }
}; // prettier-ignore

node
/*: any*/
.hash = 'fde76665dbd055d16e52358bde74f508';
module.exports = node;