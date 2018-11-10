import React from 'react';

const TextField = props => {

  let style ={paddingBottom: 10 + 'em'}
  if (props.name == "message") {
    return (
      <label>{props.label}
        <textarea
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
          <input
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
