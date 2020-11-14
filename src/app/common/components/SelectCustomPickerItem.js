import React, { useCallback, useEffect, useState } from 'react';
import {
  Container,
  Content,
  Header,
  SelectPicker,
  Icon,
  Divider,
} from 'rsuite';

function SelectCustomPickerItem(props) {
  const { data, onChanged, required, title, value, ...restProps } = props;

  const [isOpened, setIsOpened] = useState(false);
  const [customData, setCustomData] = useState(
    JSON.parse(JSON.stringify(data))
  );
  const [customNumber, steCustomNumber] = useState(1);

  useEffect(
    () => {
      // check if has more one custom menu item
      const customMenus = customData.filter(item => item.groupby === 'custom');

      if (!customMenus.length) {
        customData.push({
          label: 'divider',
          value: 'divider2',
          groupBy: 'divider',
        });
        customData.push({
          label: 'Custom Designation 1',
          value: 'custom1',
          groupBy: 'custom',
        });
      } else {
        steCustomNumber(customMenus.length);
      }

      // add data item for `Add New` button
      customData.push({
        label: 'divider',
        value: 'divider2',
        groupBy: 'divider',
      });
      customData.push({
        label: 'Add New',
        value: 'button',
        groupBy: 'button',
      });

      setCustomData(JSON.parse(JSON.stringify(customData)));
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  const handlerSelectPickerClicked = useCallback(() => {
    setIsOpened(!isOpened);
  }, [isOpened]);

  // handler for click custom menu add button
  const handlerAddCustomMenu = useCallback(() => {
    customData.splice(customData.length - 2, 0, {
      label: `Custom Designation ${customNumber + 1}`,
      value: `custom ${customNumber + 1}`,
      groupBy: 'custom',
    });
    steCustomNumber(customNumber + 1);
    setCustomData(JSON.parse(JSON.stringify(customData)));
  }, [customData, customNumber]);

  // handler for click custom menu edit button
  const handlerEditCustomMenu = useCallback(item => {
    console.log(`${item.label} menu's edit button clicked!`);
  }, []);

  // handler for click custom menu trash button
  const handlerDeleteCustomMenu = useCallback(
    item => {
      const indexOfMenuItem = customData.findIndex(
        menuItem => menuItem.value === item.value
      );
      customData.splice(indexOfMenuItem, 1);
      setCustomData(JSON.parse(JSON.stringify(customData)));
    },
    [customData]
  );

  return (
    <Container className="Select-custom-item">
      <Header className="Input-item-title">
        {title}
        {required && <span className="required">&nbsp;*</span>}
      </Header>

      <Content
        className={'Select-custom-item-content' + (isOpened ? ' opened' : '')}
        onClick={handlerSelectPickerClicked}
      >
        <SelectPicker
          data={customData}
          disabledItemValues={['divider', 'button']}
          value={value}
          cleanable={false}
          searchable={false}
          onSelect={(_value, item, _event) => onChanged(item)}
          onClose={() => setIsOpened(false)}
          menuClassName="select-custom-menu"
          maxHeight={300}
          renderMenuItem={(label, item) => {
            if (item.groupBy === 'divider') {
              return (
                <div
                  key={item.value}
                  className="Select-custom-menu-item divider"
                >
                  <Divider key={item.value} />
                </div>
              );
            } else if (item.groupBy === 'button') {
              return (
                <div
                  className="Select-custom-menu-item add-btn"
                  onClick={() => handlerAddCustomMenu()}
                >
                  <Icon icon="plus-circle" />
                  <p>Add new</p>
                </div>
              );
            } else if (item.groupBy === 'custom') {
              return (
                <div className="Select-custom-menu-item custom">
                  <h4>{label}</h4>
                  <div
                    className="custom-btn edit-btn"
                    onClick={() => handlerEditCustomMenu(item)}
                  >
                    <Icon icon="edit2" />
                  </div>
                  <div
                    className="custom-btn trash-btn"
                    onClick={() => handlerDeleteCustomMenu(item)}
                  >
                    <Icon icon="trash" />
                  </div>
                </div>
              );
            }
            return (
              <div className="row Select-custom-menu-item">
                <h4>{label}</h4>
              </div>
            );
          }}
          {...restProps}
        />
      </Content>
    </Container>
  );
}

export default SelectCustomPickerItem;
