import { Heading, Icon, Text, useColorModeValue } from '@chakra-ui/react';
import { BsLightbulb } from 'react-icons/bs';

import {
  MotionFlex,
  MotionHeading,
  MotionText,
  slideFromBottom,
  slideFromTop,
} from '../../styles/animation';
import { ContactList } from './ContactList';
import { FormEmail } from './FormEmail';

export function Contact() {
  const bg = useColorModeValue('blackAlpha.50', 'blackAlpha.300');

  return (
    <MotionFlex
      id='contact'
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true }}
      variants={slideFromBottom}
      bg={bg}
      as='section'
      width='100%'
      p='6'
      flexDir='column'
      alignItems='center'
      justifyContent='center'
    >
      <MotionHeading
        display='flex'
        variants={slideFromTop}
        alignItems='center'
        gap='2'
        fontSize={['xl', '2xl', '3xl', '4xl']}
        fontFamily='Montserrat'
        fontWeight='400'
        mb='8'
      >
        <Icon as={BsLightbulb} />
        Have an idea? Get in touch!
      </MotionHeading>

      <MotionText
        variants={slideFromTop}
        fontSize={['12', '13', '14', '15', '16']}
      >
        Let&apos;s create something together! You can find me by several ways.
      </MotionText>
      <ContactList />

      <MotionText
        variants={slideFromTop}
        fontSize={['12', '13', '14', '15', '16']}
      >
        You can also send me an e-mail directly here.
      </MotionText>
      <FormEmail />
    </MotionFlex>
  );
}
