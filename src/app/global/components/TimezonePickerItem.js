import React from 'react';
import { Container, Content, Header } from 'rsuite';
import TimezonePicker from 'react-bootstrap-timezone-picker';
import 'react-bootstrap-timezone-picker/dist/react-bootstrap-timezone-picker.min.css';

function TimezonePickerItem(props) {
  const {
    onChanged,
    title,
    value,
    ...restProps
  } = props;

  return (
    <Container className="Timezone-item">
      <Header className="Input-item-title">
        {title}
      </Header>

      <Content
        className="Timezone-item-content"
      >
        <TimezonePicker
          absolute={true}
          defaultValue="US/Central"
          onChange={onChanged}
          placeholder="Select timezone..."
          value={value}
          {...restProps}
        />
        <span className="rs-picker-toggle-caret"></span>
      </Content>
    </Container>
  );
}

export default TimezonePickerItem;
