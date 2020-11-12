import React, { useEffect, useState } from 'react';
import { Container, Content, Footer, SelectPicker, Input, Icon } from 'rsuite';

function SocialAccountListItem(props) {
  const {
    data: { icon, url, value },
    unOpenedAccounts,
    onChanged,
    onRemoved,
    hasRemoveBtn
  } = props;
  
  const [newType, setNewType] = useState(value)
  const [accountURL, setAccountURL] = useState(url)
  const [isFocused, setIsFocused] = useState(false)

  useEffect(() => {
    setNewType(value)
  }, [value])

  useEffect(() => {
    setAccountURL(url)
  }, [url])
  
  return (
    <Container className="Social-list-item">
      <Content className={"Social-list-item-content " + (isFocused ? 'focused' : '')}>
        <SelectPicker
          cleanable={false}
          data={unOpenedAccounts}
          onChange={
            // eslint-disable-next-line no-unused-vars
            (newValue, _event) => {
              setNewType(newValue)
              if (value !== newValue) onChanged(value, newValue, accountURL)
            }
          }
          renderMenuItem={(label, item) => {
            return (
              <div className="row Social-select-menu-item">
                <div className="Icon-container">
                  <Icon icon={item.icon} />
                </div>
                <div className="Social-select-menu-item-label">{label}</div>
              </div>
            )
          }}
          // eslint-disable-next-line no-unused-vars
          renderValue={(_value, item, _selectedelement) => {
            return (
              <div className="Social-selected-menu">
                <div className="Icon-container">
                  <Icon icon={item?.icon || icon} />
                </div>
              </div>
            )
          }}
          searchable={false}
          value={newType}
        />
        <Input
          onChange={setAccountURL}
          onBlur={() => {
            onChanged(value, newType, accountURL)
            setIsFocused(false)
          }}
          onFocus={() => setIsFocused(true)}
          placeholder={'Account URL'}
          value={accountURL}
        />
      </Content>

      <Footer>
        {
          hasRemoveBtn && (
            <div
              className="Social-list-item-remove-btn"
              onClick={() => onRemoved(value)}
            >
              <Icon icon="close" />
            </div>
          )
        }
      </Footer>
    </Container>
  );
}

export default SocialAccountListItem;
