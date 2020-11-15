import React, { useCallback, useState } from 'react';
import { Container, Header, Content, Footer } from 'rsuite';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';

const animatedComponents = makeAnimated();

function MDPPSSelect(props) {
  const {
    title,
    options,
    value,
    errorMsg,
    onChanged,
    extraContentEle,
    isMulti,
    required,
    ...restProps
  } = props;

  const [isValid, setIsValid] = useState(true);

  const customStyles = {
    option: (styles, { data, isFocused, isSelected }) => {
      return {
        ...styles,
        backgroundColor: isFocused || isSelected ? '#f7faff' : data.color,
        color: isFocused || isSelected ? '#4284fc' : data.color,
        cursor: 'pointer',
        paddingLeft: 20,
      };
    },
  };

  const doValidate = useCallback(() => {
    if (isMulti) setIsValid(value?.length > 0);
    else setIsValid(Boolean(value));
  }, [value, isMulti]);

  return (
    <Container className="Select-item">
      <Header className="Input-item-title">
        {title}
        {required && <span className="required">&nbsp;*</span>}
      </Header>

      <Content>
        <Select
          className={
            'mdpps-select ' + (!(required && !isValid) ? '' : 'invalid')
          }
          classNamePrefix="mdpps-select"
          closeMenuOnSelect={!isMulti}
          components={animatedComponents}
          isMulti={isMulti}
          options={options}
          onBlur={doValidate}
          onChange={onChanged}
          placeholder={isMulti ? '+ Add more' : 'Select ...'}
          styles={customStyles}
          value={value}
          {...restProps}
        />
      </Content>

      {extraContentEle}

      <Footer>
        {required && !isValid && <p className="Input-item-error">{errorMsg}</p>}
      </Footer>
    </Container>
  );
}

export default MDPPSSelect;
