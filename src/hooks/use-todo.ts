import { useCallback, useEffect, useRef, useState } from 'react';

import { toast } from 'react-toastify';
import { v4 as getUniqueId } from 'uuid';

import { Handler, Todo } from 'types/todo';

const useTodo = (): [
  todos: Todo[],
  input: React.RefObject<HTMLInputElement>,
  handler: Handler,
] => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const input = useRef<HTMLInputElement>(null);

  useEffect(() => {
    input.current?.focus();
  }, []);

  const handleAddTodo = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault(); // ページ遷移しないように（本来行われる挙動をキャンセルさせる）

      // 空文字、スペースを含む空文字を許容しない
      if (!input.current?.value.trim()) {
        toast.warn('Empty string can not submit');
        input.current!.value = ''; // eslint-disable-line @typescript-eslint/no-non-null-assertion

        return;
      }

      // XSSを試された場合の警告
      if (new RegExp('<script>', 'i').test(input.current.value)) {
        toast.error('Do not trying to XSS');
        input.current.value = '';

        return;
      }

      setTodos([
        { id: getUniqueId(), value: input.current.value, isDone: false },
        ...todos,
      ]);

      toast.success('Success, add Todo');
      input.current.value = '';
    },
    [todos],
  );

  const handleEditTodoValue = useCallback(
    (id: Todo['id'], editTodo: Todo['value']) => {
      const newTodo = todos.map((todo) => {
        const cpTodo = todo;
        if (todo.id === id) cpTodo.value = editTodo;

        return cpTodo;
      });

      setTodos(newTodo);
    },
    [todos],
  );

  const handleToggleIsDone = useCallback(
    (id: Todo['id'], isDone: Todo['isDone']) => {
      const newTodo = todos.map((todo) => {
        const cpTodo = todo;
        if (todo.id === id) cpTodo.isDone = !isDone;

        return cpTodo;
      });

      setTodos(newTodo);
    },
    [todos],
  );

  const handleDeleteTodo = useCallback(
    (id: Todo['id']) => {
      const newTodo = todos.filter((todo) => todo.id !== id);
      setTodos(newTodo);
      toast.success('Success, delete Todo', { icon: '🗑' });
      input.current?.focus();
    },
    [todos],
  );

  return [
    todos,
    input,
    {
      handleAddTodo,
      handleEditTodoValue,
      handleToggleIsDone,
      handleDeleteTodo,
    },
  ];
};

export default useTodo;
