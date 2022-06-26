/**
 * features / task-searchへ移動
 */
import { FC, memo } from 'react';

import { SearchIcon } from '@chakra-ui/icons';
import {
  FormControl,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
} from '@chakra-ui/react';

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

const SearchModalInput: FC<Props> = memo(({ isOpen, onClose }) => (
  <Modal isOpen={isOpen} onClose={onClose}>
    <ModalOverlay />
    <ModalContent maxW='container.sm' mx={2}>
      <ModalBody>
        <FormControl as='form' display='flex' alignItems='center' h={12}>
          <SearchIcon mr={3} color='blue.500' />
          <Input
            type='text'
            variant='unstyled'
            placeholder='Search the Todos'
            _placeholder={{ color: 'GrayText', fontWeight: 'semibold' }}
          />
        </FormControl>
      </ModalBody>
    </ModalContent>
  </Modal>
));

export default SearchModalInput;
