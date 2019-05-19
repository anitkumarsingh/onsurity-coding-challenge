import React from 'react';
import chroma from 'chroma-js';
import './ScrollBar.css';
import { openMenuOptions } from '../../api/DummyData/Data';
import Select from 'react-select';

const colourStyles = {
  control: styles => ({ ...styles, backgroundColor: 'white' }),
  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    const color = chroma(data.color);
    return {
      ...styles,
      backgroundColor: isDisabled
        ? null
        : isSelected ? data.color : isFocused ? color.alpha(0.1).css() : null,
      color: isDisabled
        ? '#ccc'
        : isSelected
          ? chroma.contrast(color, 'white') > 2 ? 'white' : 'black'
          : data.color,
      cursor: isDisabled ? 'not-allowed' : 'default',

      ':active': {
        ...styles[':active'],
        backgroundColor: !isDisabled && (isSelected ? data.color : color.alpha(0.3).css()),
      },
    };
  },
  input: styles => ({ ...styles }),
  placeholder: styles => ({ ...styles }),
  singleValue: (styles) => ({ ...styles}),
};

class openMenuSelect extends React.Component{
  state={
    menuIsOpen:false
  }
  componentDidMount(){
    this.setState({menuIsOpen:true})
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }
  render(){
    return(
      <Select
        label="Select your brand"
        options={openMenuOptions}
        styles={colourStyles}
        placeholder="Select your brand"
        menuIsOpen={this.state.menuIsOpen}
     />
    )
  }
}

export default openMenuSelect;


