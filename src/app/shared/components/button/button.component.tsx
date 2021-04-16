import React from 'react';
import './button.component.scss';

const Button: React.FunctionComponent<{}> = (props) => {
  return <button className="button-component">{props.children}</button>;
};

export default Button;
