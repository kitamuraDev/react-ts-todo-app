import { ReactNode, VFC } from 'react';

import { Heading } from '@chakra-ui/react';

const HeaderTitle: VFC<{ children: ReactNode }> = ({ children }) => (
  <Heading
    as='h1'
    size='2xl'
    fontWeight='extrabold'
    bgGradient='linear(90deg, rgba(174,83,235,1) 0%, rgba(16,65,252,1) 35%, rgba(40,194,230,1) 100%)'
    bgClip='text'
  >
    {children}
  </Heading>
);

export default HeaderTitle;
