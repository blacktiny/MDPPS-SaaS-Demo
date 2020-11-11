import React from 'react';
import { Divider } from 'rsuite';

function InputGroup(props) {
  const { title, children } = props;

  return (
    <div className="Input-group">
      <div className="Input-group-title">{title}</div>
      {children}
      <Divider />
    </div>
  );
}

export default InputGroup;
