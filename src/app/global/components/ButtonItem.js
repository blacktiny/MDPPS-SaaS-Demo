import React from 'react';
import { Button } from 'rsuite';

function ButtonItem(props) {
  const { title, ...restProps } = props;

  return (
    <Button id="Button-item" {...restProps}>{title}</Button>
  );
}

export default ButtonItem;
