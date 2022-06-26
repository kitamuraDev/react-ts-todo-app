import { memo, ReactElement, VFC } from 'react';

import { IconButton } from '@chakra-ui/react';

type Props = {
  children: ReactElement;
  type: 'button' | 'submit' | 'reset';
  label: string;
  bg: string;
};

const BaseIconButton: VFC<Props> = memo(({ children, type, label, bg }) => (
  <IconButton
    aria-label={label}
    type={type}
    variant='solid'
    bg={bg}
    color='white'
    _hover={{ opacity: 0.7 }}
    icon={children}
  />
));

export default BaseIconButton;
