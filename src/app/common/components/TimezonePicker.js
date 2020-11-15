import React, { useState } from 'react';
import { Container, Content, Header } from 'rsuite';
import TimezonePicker from 'react-bootstrap-timezone-picker';
import 'react-bootstrap-timezone-picker/dist/react-bootstrap-timezone-picker.min.css';

function MDPPSTimezonePicker(props) {
  const { onChanged, title, value, ...restProps } = props;

  const [isFocused, setIsFocused] = useState(false);

  return (
    <Container className="Timezone-item">
      <Header className="Input-item-title">{title}</Header>

      <Content
        className={'Timezone-item-content ' + (isFocused ? 'focused' : '')}
      >
        <TimezonePicker
          absolute={true}
          defaultValue="US/Central"
          onBlur={() => setIsFocused(false)}
          onChange={onChanged}
          onFocus={() => setIsFocused(true)}
          placeholder="Select timezone..."
          value={value}
          {...restProps}
        />
        <span className="rs-picker-toggle-caret"></span>
      </Content>
    </Container>
  );
}

export default MDPPSTimezonePicker;
