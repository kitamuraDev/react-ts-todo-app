import './App.css';

import { useState, VFC } from 'react';
import { Todo } from 'types/todoType';

const App: VFC = () => {
  const [todo, setTodo] = useState<Todo[]>([]);
  const [inputValue, setInputValue] = useState('');

  const handleChangeInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <div className='App'>
      <div>
        <h2 className='title'>Todo App Powered by React TypeScript</h2>
        {/* eslint-disable */}
        <form onSubmit={() => {}}>
          <input
            type='text'
            onChange={handleChangeInputValue}
            value={inputValue}
            className='inputText'
          />
          <input type='submit' value='追加' className='submitButton' />
        </form>
      </div>
    </div>
  );
};

export default App;
