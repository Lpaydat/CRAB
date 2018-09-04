// @flow
import React from "react";
import { createFragmentContainer, graphql } from "react-relay";

const Message = ({ msg }: { msg: { id: string, text: string } }) => (
  <div>{`${msg.id}: ${msg.text}`}</div>
);

export default createFragmentContainer(
  Message,
  graphql`
    fragment Message_msg on Message {
      id
      text
    }
  `
);
