import { Button, Icon, Stack, useColorModeValue } from '@chakra-ui/react';
import { AiFillFile } from 'react-icons/ai';
import { BsGlobe } from 'react-icons/bs';

import {
  slideFromLeft,
  MotionContainer,
  MotionFlex,
  MotionHeading,
  slideFromTop,
  MotionImage,
  fadeIn,
} from '../../styles/animation';

export function AboutMe() {
  const bg = useColorModeValue('blackAlpha.100', 'blackAlpha.300');

  return (
    <MotionFlex
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true }}
      variants={slideFromLeft}
      as='section'
      width='100%'
      mx='auto'
      p='6'
      bg={bg}
      alignItems='center'
      justifyContent='center'
      gap='32'
      flexDir={['column', 'column', 'column', 'row']}
    >
      <MotionImage
        variants={fadeIn}
        src='/images/dev.gif'
        alt='Developer GIF'
        draggable={false}
      />
      <Stack spacing='8'>
        <MotionHeading
          variants={slideFromTop}
          display='flex'
          alignItems='center'
          gap='2'
          fontSize={['xl', '2xl', '3xl', '4xl']}
          fontFamily='Montserrat'
          fontWeight='400'
          alignSelf={['center', 'center', 'center', 'flex-start']}
        >
          <Icon as={BsGlobe} />
          Hello, world!
        </MotionHeading>
        <MotionContainer
          variants={slideFromTop}
          maxW='2xl'
          lineHeight='8'
          fontWeight='300'
          fontSize={['12', '13', '14', '15', '16']}
        >
          First of all, welcome to my website! My name is Victor, I am a twenty
          years old self-taught full stack developer. I am also a Linux
          enthusiast who loves open-source and anything related to technology. I
          fell in love with coding when I was thirteen, and learned by myself
          since this. Currently I am a Computer Science student (5th semester)
          from Universidade Paulista (UNIP), living in Santos/São Paulo, Brazil.
        </MotionContainer>
        <Button
          alignSelf='flex-end'
          w={['25', '30', '40']}
          size={['xs', 'sm', 'md']}
          display='flex'
          alignItems='center'
          gap='1'
          bg='pink.500'
          color='white'
          _hover={{
            bg: 'pink.600',
          }}
          _active={{
            bg: 'pink.600',
          }}
        >
          <Icon as={AiFillFile} />
          Resume
        </Button>
      </Stack>
    </MotionFlex>
  );
}
