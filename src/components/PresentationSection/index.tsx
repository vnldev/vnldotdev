import { Heading, Icon, Text } from '@chakra-ui/react';
import { BsCode, BsCodeSlash } from 'react-icons/bs';

import {
  MotionFlex,
  fadeIn,
  MotionText,
  slideFromTop,
} from '../../styles/animation';

export function Presentation() {
  return (
    <MotionFlex
      initial='hidden'
      whileInView='visible'
      variants={fadeIn}
      p='6'
      as='section'
      width='100%'
      mx='auto'
      h='100vh'
      alignItems='center'
      flexDir='column'
      justifyContent='center'
    >
      <Heading
        textAlign='center'
        verticalAlign='center'
        fontFamily='Montserrat'
        fontSize={['xl', '2xl', '3xl', '4xl']}
      >
        Hi! I am{' '}
        <Text as='span' color='pink.500'>
          Victor
        </Text>
        , nice to meet you!
      </Heading>
      <MotionText
        variants={slideFromTop}
        fontWeight='300'
        fontSize={['10', '11', '12', '13', '14', '15']}
      >
        <Icon color='pink.500' verticalAlign='middle' as={BsCode} /> Full Stack
        Developer | Programmer | Software Engineer | Coder{' '}
        <Icon color='pink.500' verticalAlign='middle' as={BsCodeSlash} />
      </MotionText>
    </MotionFlex>
  );
}
