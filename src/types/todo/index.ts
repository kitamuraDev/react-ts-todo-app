export type Todo = {
  id: number | string;
  value: string;
  isDone: boolean;
};

export type Handler = {
  handleAddTodo: (e: React.FormEvent<HTMLFormElement>) => void;
  handleEditTodoValue: (id: Todo['id'], editTodo: Todo['value']) => void;
  handleToggleIsDone: (id: Todo['id'], isDone: Todo['isDone']) => void;
  handleDeleteTodo: (id: Todo['id']) => void;
};
