import React, { useCallback, useState } from 'react';
import { Container, Content, Footer, Header } from 'rsuite';
import PhoneInput, {
  formatPhoneNumber,
  isValidPhoneNumber,
} from 'react-phone-number-input';
import 'react-phone-number-input/style.css';

function PhoneNumberInputItem(props) {
  const {
    title,
    value,
    errorMsg,
    inputSuffixEle,
    extraContentEle,
    onChanged = () => {},
    noCaret,
    disabled,
    required,
  } = props;

  const [isEmpty, setIsEmpty] = useState(false);
  const [isValid, setIsValid] = useState(true);

  // handler for input blur event
  const handleInputBlur = useCallback(() => {
    const local = formatPhoneNumber(value);

    if (local) {
      setIsEmpty(false);
      setIsValid(isValidPhoneNumber(value));
    } else {
      setIsEmpty(true);
      setIsValid(true);
    }
  }, [required, value]);

  return (
    <Container className="Phone-number-item">
      <Header className="Input-item-title">
        {title}
        {title && required && <span className="required">&nbsp;*</span>}
      </Header>

      <Content
        className={
          'Phone-number-item-content ' +
          (isEmpty ? 'empty ' : isValid ? '' : 'invalid') +
          (disabled ? 'disabled' : '')
        }
      >
        <PhoneInput
          international
          countryCallingCodeEditable={false}
          defaultCountry="US"
          placeholder="Enter phone number"
          value={value}
          onBlur={handleInputBlur}
          onChange={onChanged}
          disabled={disabled}
        />
        {!noCaret && <span className="rs-picker-toggle-caret"></span>}
        {inputSuffixEle}
        {extraContentEle}
      </Content>

      <Footer>
        {isEmpty && required && <p className="Input-item-error">{errorMsg}</p>}
      </Footer>
    </Container>
  );
}

export default PhoneNumberInputItem;
