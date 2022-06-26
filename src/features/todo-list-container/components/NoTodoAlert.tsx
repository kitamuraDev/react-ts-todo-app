import { VFC } from 'react';

import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from '@chakra-ui/react';

const NoTodoAlert: VFC = () => (
  <Alert
    status='info'
    variant='subtle'
    flexDirection='column'
    alignItems='center'
    justifyContent='center'
    textAlign='center'
    height='200px'
  >
    <AlertIcon boxSize='40px' mr={0} />
    <AlertTitle mt={4} mb={1} fontSize='lg'>
      No Task ...
    </AlertTitle>
    <AlertDescription maxWidth='sm'>
      There are no tasks. Please register your task as anything is fine
    </AlertDescription>
  </Alert>
);

export default NoTodoAlert;
