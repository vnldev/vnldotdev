import { Flex, Icon } from '@chakra-ui/react';
import { BsCodeSlash } from 'react-icons/bs';

import {
  fadeIn,
  MotionContainer,
  MotionFlex,
  MotionHeading,
  MotionImage,
  slideFromRight,
  slideFromTop,
} from '../../styles/animation';
import { Grid } from './Grid';

export function Skills() {
  return (
    <MotionFlex
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true }}
      variants={slideFromRight}
      as='section'
      mx='auto'
      p='6'
      flexDir={['column']}
      alignItems='center'
      justifyContent='center'
    >
      <MotionHeading
        variants={slideFromTop}
        display='flex'
        alignItems='center'
        gap='2'
        fontSize={['xl', '2xl', '3xl', '4xl']}
        fontFamily='Montserrat'
        fontWeight='400'
        mb='8'
      >
        <Icon as={BsCodeSlash} />
        Skills
      </MotionHeading>
      <MotionFlex
        gap={['4', '6', '8']}
        flexDir={['column', 'column', 'column', 'row']}
      >
        <Grid />
        <MotionFlex
          variants={slideFromTop}
          flexDir={['column']}
          alignItems='center'
        >
          <MotionContainer
            variants={slideFromTop}
            maxW='2xl'
            lineHeight='8'
            fontWeight='300'
            fontSize={['12', '13', '14', '15', '16']}
          >
            Here you can see some of my skills. It is not all of them, just some
            I had more experience using over the years. However you may know if
            this is what you are looking for in a developer. I have a very
            easiness for learning new technologies, as a programmer we must be
            flexible! I started learning the triad of web technologies: HTML,
            CSS and JavaScript. After this, I jumped into PHP. Some time later I
            played with Golang and suddenly fell in love with JavaScript using
            Node.js. The evolution of frontend changed my mind and I started to
            learn frontend development with SPA libraries like React. On the way
            (and still on it) for full stack, I learned about DevOps, how to use
            Amazon Web Services (specifically S3, Lambda and EC2), Docker for
            containers (using Docker Compose) and Github Actions for CI/CD. Also
            learned Python and SQL at university. This is a short summary about
            the technologies which I have become familiar over the years.
          </MotionContainer>
          <MotionImage
            variants={fadeIn}
            src='/images/blue.gif'
            alt='Developer GIF 2'
            draggable={false}
            alignSelf='flex-end'
          />
        </MotionFlex>
      </MotionFlex>
    </MotionFlex>
  );
}
