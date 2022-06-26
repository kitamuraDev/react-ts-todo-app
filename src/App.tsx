import { VFC } from 'react';

import { Box, Spacer, useMediaQuery, useDisclosure } from '@chakra-ui/react';

import LayoutContainer from 'components/layouts';
import DarkModeToggleButton from 'components/parts/dark-mode-toggle-button';
import TodoInputForm from 'features/todo-input-form';
import TodoInputFormMobileButton from 'features/todo-input-form-mobile-button';
import TodoInputFormModal from 'features/todo-input-form-modal';
import TodoListContainer from 'features/todo-list-container';
import useTodo from 'hooks/use-todo';

import 'react-toastify/dist/ReactToastify.css';

const App: VFC = () => {
  const [todos, input, handler] = useTodo();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isGreaterThan481] = useMediaQuery('(min-width: 481px)');
  const [isSmallerThan480] = useMediaQuery('(max-width: 480px)');

  return (
    <>
      <DarkModeToggleButton />
      <Box mt='7rem' />
      <LayoutContainer>
        <Box mb='5rem' />
        <TodoListContainer
          todos={todos}
          handleEditTodoValue={handler.handleEditTodoValue}
          handleToggleIsDone={handler.handleToggleIsDone}
          handleDeleteTodo={handler.handleDeleteTodo}
        />
        <Spacer />
        {isGreaterThan481 && (
          <TodoInputForm handleAddTodo={handler.handleAddTodo} input={input} />
        )}
        {isSmallerThan480 && <TodoInputFormMobileButton onOpen={onOpen} />}
        <TodoInputFormModal
          isOpen={isOpen}
          onClose={onClose}
          handleAddTodo={handler.handleAddTodo}
          input={input}
        />
      </LayoutContainer>
    </>
  );
};

export default App;
