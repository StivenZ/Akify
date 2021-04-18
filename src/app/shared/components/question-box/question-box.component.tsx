import React from 'react';
import './question-box.component.scss';
import questionBoxImg from './question-box.svg';

const QuestionBox: React.FunctionComponent = () => {
    return (
        <div className="question-box-component">
            <input type="text"/>
            <img src={questionBoxImg} alt="Symbol"/>
        </div>
    );
}

export default QuestionBox;