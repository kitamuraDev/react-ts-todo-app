import { memo, VFC } from 'react';

type Props = {
  handleAddTodo: (e: React.FormEvent<HTMLFormElement>) => void;
  input: React.RefObject<HTMLInputElement>;
};

const TodoForm: VFC<Props> = memo((props) => {
  const { handleAddTodo, input } = props;

  return (
    <form onSubmit={handleAddTodo}>
      <input type='text' ref={input} className='inputText' />
      <input type='submit' value='追加' className='submitButton' />
    </form>
  );
});

export default TodoForm;
