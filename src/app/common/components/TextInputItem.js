import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Container, Content, Footer, Header, Input } from 'rsuite';

function TextInputItem(props) {
  const {
    customStyle,
    disabled,
    doValidate,
    errorMsg,
    extraContentEle,
    inputPrefixEle,
    inputSuffixEle,
    onChanged,
    placeholder,
    required,
    title,
    tooltip,
    type = 'text',
    value,
  } = props;
  const [isValid, setIsValid] = useState(true)
  const [isFocused, setIsFocused] = useState(false)
  const [tooltipAlign, setTooltipAlign] = useState('right') // align for hint or tooltip

  const eleRef = useRef() // reference for hint or tooltip element

  useEffect(() => {
    if (eleRef.current && tooltip) {
      const { right } = eleRef.current.getBoundingClientRect()
      // eslint-disable-next-line no-undef
      if (window.innerWidth - right > 250)
        setTooltipAlign('right')
      else
        setTooltipAlign('top')
    }
  }, [eleRef.current, tooltip])

  // do validate
  useEffect(() => {
    if (doValidate) handleInputBlur()
  }, [doValidate])

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

  return (
    <Container className="Input-item">
      <Header className="Input-item-title">
        {title}
        {(title && required) && <span className="required">&nbsp;*</span>}
      </Header>

      <Content>
        <div
          className={
            "Input-item-container " + (isValid ? (isFocused ? 'focus ' : '') : 'error ') + (disabled ? 'disabled' : '')
          }
          ref={eleRef}
        >
          {inputPrefixEle}
          <Input
            type={type}
            style={customStyle}
            value={value}
            placeholder={placeholder}
            onChange={onChanged}
            disabled={disabled}
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
          />
          {inputSuffixEle}
        </div>
       {extraContentEle}
      </Content>

      <Footer>
        {!isValid && <p className="Input-item-error">{errorMsg}</p>}
        {(isFocused && tooltip) && <div className={"Input-item-tooltip " + tooltipAlign}>{tooltip}</div>}
      </Footer>
    </Container>
  );
}

export default TextInputItem;
