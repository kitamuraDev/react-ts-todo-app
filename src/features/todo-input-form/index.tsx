import { memo, VFC } from 'react';

import { SmallAddIcon } from '@chakra-ui/icons';
import { Box, Container, HStack, Input } from '@chakra-ui/react';

import BaseIconButton from 'components/parts/base-icon-button';

export type TodoInputProps = {
  handleAddTodo: (e: React.FormEvent<HTMLFormElement>) => void;
  input: React.RefObject<HTMLInputElement>;
};

const TodoInputForm: VFC<TodoInputProps> = (props) => {
  const { handleAddTodo, input } = props;

  return (
    <Box>
      <Container maxW='container.sm' mx='auto'>
        <form onSubmit={handleAddTodo}>
          <HStack>
            <Input
              type='text'
              ref={input}
              variant='flushed'
              placeholder='Write your todo here'
            />
            <BaseIconButton
              type='submit'
              label='add todo button'
              bg='aobutaTheme.lightBlue'
            >
              <SmallAddIcon />
            </BaseIconButton>
          </HStack>
        </form>
      </Container>
    </Box>
  );
};

export default memo(TodoInputForm);
