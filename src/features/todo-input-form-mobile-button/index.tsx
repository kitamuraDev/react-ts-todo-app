import { VFC } from 'react';

import { SmallAddIcon } from '@chakra-ui/icons';
import { IconButton } from '@chakra-ui/react';

type Props = {
  onOpen: () => void;
};

const TodoInputFormMobileButton: VFC<Props> = ({ onOpen }) => (
  <IconButton
    aria-label='add button'
    icon={<SmallAddIcon color='white' w={8} h={8} />}
    bg='aobutaTheme.lightBlue'
    position='fixed'
    bottom='64px'
    right='24px'
    zIndex={99}
    isRound
    w={16}
    h={16}
    // 空{}を渡すことでhoverでは何もしないことになる
    _hover={{}}
    _active={{}}
    _focus={{ boxShadow: 'none' }} // "box-shadow"に関しては、明示的に打ち消す
    onClick={onOpen}
  />
);

export default TodoInputFormMobileButton;
