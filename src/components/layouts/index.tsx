import { memo, ReactNode, VFC } from 'react';

import { Flex, Stack } from '@chakra-ui/react';

import Footer from './Footer';
import Header from './Header';

const LayoutContainer: VFC<{ children: ReactNode }> = memo(({ children }) => (
  <Flex h='100vh' flexDirection='column'>
    <Stack h='full' spacing={5} justify='space-between'>
      <Header />
      {children}
      <Footer />
    </Stack>
  </Flex>
));

export default LayoutContainer;
