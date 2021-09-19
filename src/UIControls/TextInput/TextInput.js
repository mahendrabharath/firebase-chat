import React from 'react';
import './TextInput.css'
const TextInput = props => <div className={"form__group field " + props.className}>
    <input {...props} autoComplete="off" type="input" className="form__field" />
    <label htmlFor="name" className="form__label">{props.placeholder}</label>
</div>

export default TextInput;