// @flow
import React from 'react';
import { createFragmentContainer, graphql } from 'react-relay';

const Tester = ({ msg }: { msg: { id: string, text: string } }) => (
  <div>{`${msg.id}: ${msg.text}`}</div>
);

export default createFragmentContainer(
  Tester,
  graphql`
    fragment Tester_msg on Message {
      id
      text
    }
  `,
);
