import React from 'react';
import { Input, TextArea } from 'semantic-ui-react'

const TextField = props => {

  let style ={paddingBottom: 5 + 'em'}
  if (props.name == "message") {
    return (
      <label>{props.label}
        <TextArea autoHeight
          className={props.name}
          name={props.name}
          type='text'
          value={props.value}
          onChange={props.handleChange}
          style={style}
          placeholder={props.placeholder}
        />
      </label>
    );
  }
  else return (
        <label>{props.label}
          <Input
            className={props.name}
            name={props.name}
            type='text'
            value={props.value}
            onChange={props.handleChange}
            placeholder={props.placeholder}
          />
        </label>
      );
}

export default TextField;
