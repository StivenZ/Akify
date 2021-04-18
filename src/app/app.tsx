import React from 'react';

import TextInput from './shared/components/text-input/text-input.component';
import Button from './shared/components/button/button.component';
import QuestionBox from './shared/components/question-box/question-box.component';

import './globals.scss';
import 'normalize.css';


const App: React.FunctionComponent<{}> = () => {
  return (
    <div className="app-root">
      <Button>Hola mundo</Button>
      <TextInput></TextInput>
      <QuestionBox></QuestionBox>
    </div>
  );
}

export default App;
