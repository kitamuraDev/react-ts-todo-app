import { memo, VFC } from 'react';

import { DeleteIcon } from '@chakra-ui/icons';
import {
  Box,
  Container,
  Stack,
  StackDivider,
  HStack,
  Checkbox,
  Input,
  IconButton,
} from '@chakra-ui/react';

import { Todo } from 'types/todo';

import NoTodoAlert from './components/NoTodoAlert';

type Props = {
  todos: Todo[];
  handleEditTodoValue: (id: Todo['id'], editTodo: Todo['value']) => void;
  handleToggleIsDone: (id: Todo['id'], isDone: Todo['isDone']) => void;
  handleDeleteTodo: (id: Todo['id']) => void;
};

const TodoListContainer: VFC<Props> = (props) => {
  const { todos, handleEditTodoValue, handleToggleIsDone, handleDeleteTodo } =
    props;

  return (
    <Box>
      <Container maxW='container.md'>
        {!todos.length ? (
          <NoTodoAlert />
        ) : (
          <Stack
            as='ul'
            p={4}
            spacing={4}
            divider={<StackDivider />}
            borderRadius='lg'
            borderColor='gray.100'
            borderWidth='2px'
          >
            {todos.map((todo) => (
              <HStack key={todo.id} as='li' spacing='8'>
                <Checkbox
                  onChange={() => handleToggleIsDone(todo.id, todo.isDone)}
                />
                <Input
                  onChange={(e) => handleEditTodoValue(todo.id, e.target.value)}
                  value={todo.value}
                  disabled={todo.isDone}
                />
                <IconButton
                  aria-label='delete icon'
                  icon={<DeleteIcon />}
                  isRound
                  onClick={() => handleDeleteTodo(todo.id)}
                />
              </HStack>
            ))}
          </Stack>
        )}
      </Container>
    </Box>
  );
};

export default memo(TodoListContainer);
