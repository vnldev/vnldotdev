import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useColorModeValue,
} from '@chakra-ui/react';

interface CustomModalProps {
  title: string;
  text: string;
  isOpen: boolean;
  onClose: () => void;
}

export function CustomModal({
  title,
  text,
  isOpen,
  onClose,
}: CustomModalProps) {
  const bg = useColorModeValue('gray.100', 'gray.900');

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent borderRadius='8' bg={bg}>
        <ModalHeader borderRadius='8' bg={bg}>
          {title}
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>{text}</ModalBody>
        <ModalFooter borderRadius='8' bg={bg}>
          <Button px='8' colorScheme='pink' variant='solid' onClick={onClose}>
            OK
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
