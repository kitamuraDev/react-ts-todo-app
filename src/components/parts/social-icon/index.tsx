import { memo, ReactElement, VFC } from 'react';

import { Link, IconButton } from '@chakra-ui/react';

type Props = {
  children: ReactElement;
  href: string;
  label: string;
};

const SocialIcon: VFC<Props> = memo(({ children, href, label }) => (
  <Link href={href}>
    <IconButton
      aria-label={label}
      variant='link'
      isRound
      icon={children}
      _hover={{ color: 'black' }}
    />
  </Link>
));

export default SocialIcon;
