import React from 'react';
import { Container, Header, Content } from 'rsuite';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';

const animatedComponents = makeAnimated();

function MDPPSSelect(props) {
  const {
    title,
    options,
    value,
    onChanged,
    isMulti,
    required,
    ...restProps
  } = props;

  const colourStyles = {
    option: (styles, { data, isFocused, isSelected }) => {
      return {
        ...styles,
        backgroundColor: isFocused || isSelected
          ? '#f7faff'
          : data.color,
        color: isFocused || isSelected
          ? '#4284fc'
          : data.color,
        cursor: 'pointer'
      }
    }
  }

  return (
    <Container className="Select-item">
      <Header className="Input-item-title">
        {title}
        {required && <span className="required">&nbsp;*</span>}
      </Header>

      <Content>
        <Select
          className="mdpps-select"
          classNamePrefix="mdpps-select"
          closeMenuOnSelect={!isMulti}
          components={animatedComponents}
          isMulti={isMulti}
          options={options}
          onChange={onChanged}
          styles={colourStyles}
          value={value}
          {...restProps}
        />
      </Content>
    </Container>
  );
}

export default MDPPSSelect;
