import { ChangeEvent, SyntheticEvent, useState } from 'react';
import {
  Flex,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  useDisclosure,
  useColorModeValue,
} from '@chakra-ui/react';
import { CustomModal } from '../CustomModal';
import { fadeIn, MotionFlex } from '../../styles/animation';

export function FormEmail() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const { isOpen, onOpen, onClose } = useDisclosure();

  const bg = useColorModeValue('gray.100', 'blackAlpha.400');
  const borderColor = useColorModeValue('whiteAlpha.600', 'blackAlpha.200');

  function handleSubmit(e: SyntheticEvent) {
    e.preventDefault();
    let data = {
      name,
      email,
      message,
    };

    if (!name || !email || !message) {
    }

    fetch('/api/contact', {
      method: 'POST',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (response.status === 200) {
          setName('');
          setEmail('');
          setMessage('');
          onOpen();
        }
      })
      .catch((err) => {});
  }

  return (
    <>
      <CustomModal
        title='Contact'
        text='Your message was sent.'
        isOpen={isOpen}
        onClose={onClose}
      />
      <MotionFlex
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true }}
        variants={fadeIn}
        onSubmit={handleSubmit}
        as='form'
        mt='8'
        flexDir='column'
        alignItems='center'
        gap='6'
        borderWidth='1px'
        borderRadius={8}
        bg={bg}
        borderColor={borderColor}
        boxShadow='md'
        p='4'
      >
        <FormControl isRequired>
          <FormLabel htmlFor='name' fontSize={['12', '13', '14', '15', '16']}>
            Name
          </FormLabel>
          <Input
            fontSize={['12', '13', '14', '15', '16']}
            value={name}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setName(e.target.value)
            }
            id='name'
            type='text'
            placeholder='John Doe'
          />
        </FormControl>
        <FormControl isRequired>
          <FormLabel htmlFor='email' fontSize={['12', '13', '14', '15', '16']}>
            E-mail
          </FormLabel>
          <Input
            fontSize={['12', '13', '14', '15', '16']}
            value={email}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setEmail(e.target.value)
            }
            id='email'
            type='email'
            placeholder='your-email@domain.com'
          />
        </FormControl>
        <FormControl isRequired>
          <FormLabel
            htmlFor='message'
            fontSize={['12', '13', '14', '15', '16']}
          >
            Message
          </FormLabel>
          <Textarea
            fontSize={['12', '13', '14', '15', '16']}
            value={message}
            onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
              setMessage(e.target.value)
            }
            cols={50}
            rows={10}
            id='message'
            placeholder='Type your message here'
            resize={'none'}
          />
        </FormControl>
        <Button
          size={['xs', 'sm', 'md', 'lg']}
          w='100%'
          type='submit'
          bg='pink.500'
          color='white'
          _hover={{
            bg: 'pink.600',
          }}
          _active={{
            bg: 'pink.600',
          }}
        >
          Send
        </Button>
      </MotionFlex>
    </>
  );
}
