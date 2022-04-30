/* eslint-disable react/jsx-handler-names */
import './App.css';
import 'react-toastify/dist/ReactToastify.css';

import TodoForm from 'components/TodoForm';
import TodoItem from 'components/TodoItem';
import useTodo from 'hooks/use-todo';
import { VFC } from 'react';
import { ToastContainer } from 'react-toastify';

const App: VFC = () => {
  const [todos, input, handler] = useTodo();

  return (
    <div className='App'>
      <div>
        <h2 className='title'>Todo App Powered by React TypeScript</h2>
        <TodoForm handleAddTodo={handler.handleAddTodo} input={input} />
        <TodoItem
          todos={todos}
          handleEditTodoValue={handler.handleEditTodoValue}
          handleToggleIsDone={handler.handleToggleIsDone}
          handleDeleteTodo={handler.handleDeleteTodo}
        />
      </div>

      <ToastContainer position='bottom-right' autoClose={3000} limit={5} />
    </div>
  );
};

export default App;
