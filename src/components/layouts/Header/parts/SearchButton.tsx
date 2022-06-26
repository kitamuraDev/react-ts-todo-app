/**
 * features / task-searchへ移動
 */
import { FC, memo } from 'react';

import { SearchIcon } from '@chakra-ui/icons';
import { Button, HStack, Text, Kbd } from '@chakra-ui/react';

type Props = {
  onOpen: () => void;
};

const SearchButton: FC<Props> = memo(({ onOpen }) => (
  <Button
    boxShadow='base'
    bg='white'
    color='GrayText'
    h={12}
    w='xl'
    px={4}
    py={3}
    _hover={{ bg: 'none' }}
    onClick={onOpen}
  >
    <SearchIcon mr={3} />
    <HStack w='full'>
      <Text flex={1} textAlign='left'>
        Search the Todos
      </Text>
      <Kbd borderRadius='sm'>Ctrl</Kbd>
      <Kbd borderRadius='sm'>k</Kbd>
    </HStack>
  </Button>
));

export default SearchButton;
