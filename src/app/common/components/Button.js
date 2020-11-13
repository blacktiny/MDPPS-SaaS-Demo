import React from 'react';
import { Button } from 'rsuite';

function MDPPSButton(props) {
  const { title, ...restProps } = props;

  return (
    <Button id="mdpps-button" {...restProps}>{title}</Button>
  );
}

export default MDPPSButton;
