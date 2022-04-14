import { memo, VFC } from 'react';

import { Todo } from '../types/todo';

type Props = {
  todos: Todo[];
  handleEditTodoValue: (id: Todo['id'], editTodo: Todo['value']) => void;
  handleToggleIsDone: (id: Todo['id'], isDone: Todo['isDone']) => void;
  handleDeleteTodo: (id: Todo['id']) => void;
};

const TodoItem: VFC<Props> = memo((props) => {
  const { todos, handleEditTodoValue, handleToggleIsDone, handleDeleteTodo } =
    props;

  return (
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
  );
});

export default TodoItem;
