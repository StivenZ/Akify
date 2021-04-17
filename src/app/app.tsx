import './globals.scss';
import React from 'react';

import TextInput from './shared/components/text-input/text-input.component';
import Button from './shared/components/button/button.component';

const App: React.FunctionComponent<{}> = () => {
  return (
    <div className="app-root">
      <Button>Hola mundo</Button>
      <TextInput></TextInput>
    </div>
  );
}

export default App;
