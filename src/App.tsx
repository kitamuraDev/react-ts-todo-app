import './App.css';

import { VFC } from 'react';

const App: VFC = () => (
  <div className='App'>
    <div>
      <h2 className='title'>Todo App Powered by React TypeScript</h2>
      {/* eslint-disable */}
      <form onSubmit={() => {}}>
        <input type='text' onChange={() => {}} className='inputText' />
        <input type='submit' value='追加' className='submitButton' />
      </form>
    </div>
  </div>
);

export default App;
