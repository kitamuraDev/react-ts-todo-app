/**
 * features / task-input-formへ移動
 */

import { memo, ReactNode, VFC } from 'react';

import { Button } from '@chakra-ui/react';

const AddTodoButton: VFC<{ children: ReactNode }> = memo(({ children }) => (
  <Button
    display={{ base: 'none', md: 'inline-flex' }}
    variant='solid'
    color='white'
    bg='aobutaTheme.lightBlue'
    border='1px solid #28c2e6'
    _hover={{
      color: 'aobutaTheme.lightBlue',
      bg: 'white',
      border: '1px solid #28c2e6',
    }}
  >
    {children}
  </Button>
));

export default AddTodoButton;
