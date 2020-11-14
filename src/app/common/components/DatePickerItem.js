import React, { useCallback, useState } from 'react';
import { Container, Content, DatePicker, Header } from 'rsuite';

function DatePickerItem(props) {
  const { title, value, onChanged, required } = props;
  const [isOpened, setIsOpened] = useState(false);

  const Locale = {
    sunday: 'S',
    monday: 'M',
    tuesday: 'T',
    wednesday: 'W',
    thursday: 'T',
    friday: 'F',
    saturday: 'S',
  };

  const handlerDatePickerClicked = useCallback(() => {
    setIsOpened(!isOpened);
  }, [isOpened]);

  return (
    <Container className="Date-item">
      <Header className="Input-item-title">
        {title}
        {required && <span className="required">&nbsp;*</span>}
      </Header>

      <Content onClick={handlerDatePickerClicked}>
        <DatePicker
          className={'Date-item-toggle ' + (isOpened ? 'opened' : '')}
          appearance={'subtle'}
          cleanable={false}
          format={'MMM DD, YYYY'}
          locale={Locale}
          onChange={onChanged}
          onClose={() => setIsOpened(false)}
          oneTap={true}
          value={value}
        />
      </Content>
    </Container>
  );
}

export default DatePickerItem;
