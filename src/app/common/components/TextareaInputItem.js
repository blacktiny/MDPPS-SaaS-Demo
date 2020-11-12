import React, { useCallback, useState } from 'react';
import { Container, Content, Header, Input } from 'rsuite';

const MAX_LENGTH = 1024;

function TextareaInputItem(props) {
  const {
    customStyle,
    disabled,
    extraContent,
    onChanged,
    placeholder,
    required,
    title,
    value,
    ...restProps
  } = props;
  const [isValid, setIsValid] = useState(true)
  const [isFocused, setIsFocused] = useState(false)

  // handler for input focus event
  const handleInputFocus = useCallback(() => {
    setIsFocused(true)
  }, [])

  // handler for input blur event
  const handleInputBlur = useCallback(() => {
    setIsFocused(false)
    if (!required) setIsValid(true)
    else if (value) setIsValid(true)
    else
      setIsValid(false)
  }, [required, value])

  // handler for input change event
  const handlerInputChange = useCallback(newValue => {
    if (newValue.length <= MAX_LENGTH) onChanged(newValue)
  }, [value])

  return (
    <Container className="Input-item Textarea-item">
      <Header className="Input-item-title">
        {title}
        {required && <span className="required">&nbsp;*</span>}
      </Header>

      <Content>
        <div
          className={
            "Input-item-container Textarea-item-container " + (isValid ? (isFocused ? 'focus ' : '') : 'error ') + (disabled ? 'disabled' : '')
          }
        >
          <Input
            disabled={disabled}
            onBlur={handleInputBlur}
            onChange={handlerInputChange}
            onFocus={handleInputFocus}
            placeholder={placeholder}
            rows={7}
            style={customStyle}
            componentClass={'textarea'}
            value={value}
            {...restProps}
          />
        </div>
        <div className={"Input-description " + (value.length === MAX_LENGTH ? 'error' : '')}>
          Symbols left: {MAX_LENGTH - value.length}
        </div>
       {extraContent}
      </Content>
    </Container>
  );
}

export default TextareaInputItem;
