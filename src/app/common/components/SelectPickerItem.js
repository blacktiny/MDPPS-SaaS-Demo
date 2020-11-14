import React, { useCallback, useMemo, useState } from 'react';
import { Container, Content, Header, Input, SelectPicker } from 'rsuite';

function SelectPickerItem(props) {
  const {
    data,
    editable,
    onChanged,
    required,
    title,
    value,
    ...restProps
  } = props;

  const [searchVal, setSearchVal] = useState('');
  const [isOpened, setIsOpened] = useState(false);

  const filteredSelectData = useMemo(() => {
    if (editable) {
      return data.filter(item => item.value.includes(searchVal));
    } else {
      return data;
    }
  }, [data, editable, searchVal]);

  const handlerSelectPickerClicked = useCallback(() => {
    setIsOpened(!isOpened);
  }, [isOpened]);

  return (
    <Container className="Select-item">
      <Header className="Input-item-title">
        {title}
        {required && <span className="required">&nbsp;*</span>}
      </Header>

      <Content
        className={'Select-item-content' + (isOpened ? ' opened' : '')}
        onClick={handlerSelectPickerClicked}
      >
        {editable && <Input onChange={setSearchVal} value={searchVal} />}
        <SelectPicker
          cleanable={false}
          data={filteredSelectData}
          onChange={onChanged}
          onClose={() => setIsOpened(false)}
          searchable={false}
          value={value}
          {...restProps}
        />
      </Content>
    </Container>
  );
}

export default SelectPickerItem;
