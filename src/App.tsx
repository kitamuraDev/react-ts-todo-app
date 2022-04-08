import './App.css';

import React, { useEffect, useRef, useState, VFC } from 'react';
import { Todo } from 'types/todoType';
import { v4 as getUniqueId } from 'uuid';

const App: VFC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const input = useRef<HTMLInputElement>(null);

  useEffect(() => {
    input.current?.focus();
  }, []);

  const handleEditTodoValue = (id: Todo['id'], editTodo: string) => {
    const newTodo = todos.map((todo) => {
      if (todo.id === id) {
        todo.value = editTodo; // eslint-disable-line no-param-reassign
      }

      return todo;
    });

    setTodos(newTodo);
  };

  const handleAddTodo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // ページ遷移しないように（本来行われる挙動をキャンセルさせる）

    if (!input.current?.value.trim()) return; // 空文字, 空白行を含む空文字を許容しない

    setTodos([
      {
        id: getUniqueId(), // eslint-disable-line
        value: input.current.value,
        isDone: false,
      },
      ...todos,
    ]);

    input.current.value = '';
  };

  const handleToggleIsDone = (id: Todo['id'], isDone: boolean) => {
    const newTodo = todos.map((todo) => {
      if (todo.id === id) {
        todo.isDone = !isDone; // eslint-disable-line no-param-reassign
      }

      return todo;
    });

    setTodos(newTodo);
  };

  const handleDeleteTodo = (id: Todo['id']) => {
    const newTodo = todos.filter((todo) => todo.id !== id);
    setTodos(newTodo);
    input.current?.focus();
  };

  return (
    <div className='App'>
      <div>
        <h2 className='title'>Todo App Powered by React TypeScript</h2>
        <form onSubmit={handleAddTodo}>
          <input type='text' ref={input} className='inputText' />
          <input type='submit' value='追加' className='submitButton' />
        </form>
        <ul className='todoList'>
          {todos.map((todo) => (
            <li key={todo.id}>
              <input
                type='checkbox'
                onChange={() => handleToggleIsDone(todo.id, todo.isDone)}
              />
              <input
                type='text'
                onChange={(e) => handleEditTodoValue(todo.id, e.target.value)}
                value={todo.value}
                disabled={todo.isDone}
                className='inputText'
              />
              <button type='button' onClick={() => handleDeleteTodo(todo.id)}>
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
