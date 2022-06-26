import { VFC } from 'react';

import { SunIcon, MoonIcon } from '@chakra-ui/icons';
import { IconButton, useColorMode } from '@chakra-ui/react';

const DarkModeToggleButton: VFC = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <IconButton
      aria-label='DarkMode Toggle Icon'
      icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
      position='fixed'
      top='24px'
      right='24px'
      zIndex={99}
      isRound
      // 空{}を渡すことでhoverでは何もしないことになる
      _hover={{}}
      _active={{}}
      _focus={{ boxShadow: 'none' }} // "box-shadow"に関しては、明示的に打ち消す
      onClick={toggleColorMode}
    />
  );
};

export default DarkModeToggleButton;
