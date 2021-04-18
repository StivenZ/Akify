import React from 'react';
import './question-box.component.scss';
// import paperPlaneImg from './paper-plane.svg';

const QuestionBox: React.FunctionComponent = () => {
    return (
        <div className="question-box-component">
            <input type="text" className="input-text" />
        </div>
    );
}

export default QuestionBox;