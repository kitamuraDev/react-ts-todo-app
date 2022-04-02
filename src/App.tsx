import './App.css';

import React, { useState, VFC } from 'react';
import { Todo } from 'types/todoType';

const App: VFC = () => {
  const [todo, setTodo] = useState<Todo[]>([]);
  const [inputValue, setInputValue] = useState('');

  const handleChangeInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // ページ遷移しないように（本来行われる挙動をキャンセルさせる）

    // add todo
    const newTodo: Todo = {
      id: todo.length,
      value: inputValue,
      isDone: false,
    };

    setTodo([newTodo, ...todo]);
    setInputValue(''); // 入力エリアの初期化
  };

  return (
    <div className='App'>
      <div>
        <h2 className='title'>Todo App Powered by React TypeScript</h2>
        <form onSubmit={handleSubmit}>
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
