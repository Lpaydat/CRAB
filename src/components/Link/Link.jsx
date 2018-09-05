// @flow
import * as React from 'react';
import history from '../../history';

const isLeftClickEvent = e => e.button === 0;
const isModifiedEvent = e => !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);

const Link = ({
  to, children, onClick, ...props
}: { to: string, children: React.Node, onClick: Function }) => {
  const handleClick = (event) => {
    if (onClick) { onClick(event); }
    if (isModifiedEvent(event) || !isLeftClickEvent(event)) { return; }
    if (event.defaultPrevented === true) { return; }

    event.preventDefault();
    history.push(to);
  };

  return <a href={to} {...props} onClick={handleClick}>{children}</a>;
};

export default Link;
