import { VFC, memo } from 'react';

import { SmallAddIcon } from '@chakra-ui/icons';
import {
  HStack,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
} from '@chakra-ui/react';

import BaseIconButton from 'components/parts/base-icon-button';
import { TodoInputProps } from 'features/todo-input-form';

type Props = {
  isOpen: boolean;
  onClose: () => void;
} & TodoInputProps;

const TodoInputFormModal: VFC<Props> = memo(
  ({ isOpen, onClose, handleAddTodo, input }) => (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent maxW='container.sm' mx={2}>
        <ModalBody>
          <form
            onSubmit={(e) => {
              handleAddTodo(e);
              onClose();
            }}
          >
            <HStack>
              <Input
                type='text'
                ref={input}
                variant='flushed'
                placeholder='Write your todo here'
              />
              <BaseIconButton
                type='submit'
                label='add todo button'
                bg='aobutaTheme.lightBlue'
              >
                <SmallAddIcon />
              </BaseIconButton>
            </HStack>
          </form>
        </ModalBody>
      </ModalContent>
    </Modal>
  ),
);

export default TodoInputFormModal;
