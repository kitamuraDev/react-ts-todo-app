import './App.css';

import React, { useState, VFC } from 'react';
import { Todo } from 'types/todoType';

const App: VFC = () => {
  const [todo, setTodo] = useState<Todo[]>([]);
  const [inputValue, setInputValue] = useState('');

  const handleChangeInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleEditInputValue = (id: number, editTargetTodo: string) => {
    const newTodo = todo.map((todoItem) => {
      if (todoItem.id === id) {
        todoItem.value = editTargetTodo; // eslint-disable-line no-param-reassign
      }

      return todoItem;
    });

    setTodo(newTodo);
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

  const handleToggleIsDone = (id: number, isDone: boolean) => {
    const newTodo = todo.map((todoItem) => {
      if (todoItem.id === id) {
        todoItem.isDone = !isDone; // eslint-disable-line no-param-reassign
      }

      return todoItem;
    });

    setTodo(newTodo);
  };

  const handleDelete = (id: number) => {
    const newTodo = todo.filter((todoItem) => todoItem.id !== id);
    setTodo(newTodo);
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
        <ul className='todoList'>
          {todo.map((todoItem) => (
            <li key={todoItem.id}>
              <input
                type='text'
                onChange={(e) =>
                  handleEditInputValue(todoItem.id, e.target.value)
                }
                value={todoItem.value}
                disabled={todoItem.isDone}
                className='inputText'
              />
              <input
                type='checkbox'
                onChange={() =>
                  handleToggleIsDone(todoItem.id, todoItem.isDone)
                }
              />
              <button type='button' onClick={() => handleDelete(todoItem.id)}>
                削除
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
