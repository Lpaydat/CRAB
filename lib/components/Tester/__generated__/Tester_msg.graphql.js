/* eslint-disable */
'use strict';
/*::
import type { ConcreteFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type Tester_msg$ref: FragmentReference;
export type Tester_msg = {|
  +id: string,
  +text: ?string,
  +$refType: Tester_msg$ref,
|};
*/

var node
/*: ConcreteFragment*/
= {
  "kind": "Fragment",
  "name": "Tester_msg",
  "type": "Message",
  "metadata": null,
  "argumentDefinitions": [],
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
}; // prettier-ignore

node
/*: any*/
.hash = '20f96e764b4469ebe7dbc8b79152fa43';
module.exports = node;