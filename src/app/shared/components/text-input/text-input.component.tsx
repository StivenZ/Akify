import React from 'react';
import './text-input.component.scss';

const TextInput: React.FunctionComponent = () => {
    return (
        <input className="text-input-component" type="text" placeholder="ingresa el código de tu sala"/>
    )
}

export default TextInput;