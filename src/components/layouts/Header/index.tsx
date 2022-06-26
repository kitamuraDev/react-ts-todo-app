import { memo, VFC } from 'react';

import { Box } from '@chakra-ui/react';

import HeaderTitle from './parts/HeaderTitle';

const Header: VFC = memo(() => (
  <Box as='header' maxW='container.lg' mx='auto'>
    <HeaderTitle>Todo Application</HeaderTitle>
  </Box>
));

export default Header;
