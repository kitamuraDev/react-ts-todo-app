import { VFC, memo } from 'react';

import { Flex, HStack, Text, useColorModeValue } from '@chakra-ui/react';
import { FaGithub, FaTwitter } from 'react-icons/fa';

import SocialIcon from 'components/parts/social-icon';

const Footer: VFC = memo(() => {
  const borderTopColor = useColorModeValue('#EDF2F7', '#000');
  const borderProp = `1px solid ${borderTopColor}`;

  return (
    <Flex
      as='footer'
      justify='space-around'
      align='center'
      py={3}
      borderTop={borderProp}
    >
      <Text fontSize={{ base: 'xs', md: 'sm' }} color='GrayText'>
        © {new Date().getFullYear()} kitamuraDev
      </Text>

      <HStack>
        <SocialIcon
          href='https://github.com/kitamuraDev'
          label='Github link @kitamuraDev'
        >
          <FaGithub />
        </SocialIcon>
        <SocialIcon
          href='https://twitter.com/kitamuraDev'
          label='Twitter link @kitamuraDev'
        >
          <FaTwitter />
        </SocialIcon>
      </HStack>
    </Flex>
  );
});

export default Footer;
