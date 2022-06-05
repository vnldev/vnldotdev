import type { NextPage } from 'next';
import Head from 'next/head';
import { Flex } from '@chakra-ui/react';

import { Header } from '../components/Header';
import { AboutMe } from '../components/AboutMeSection';
import { Skills } from '../components/SkillsSection';
import { Presentation } from '../components/PresentationSection';
import { Contact } from '../components/ContactSection';
import { Footer } from '../components/Footer';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>vnl.dev</title>
        <meta name='description' content='vnl.dev' />
        <meta name='author' content='Victor Nascimento de Lima' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Header />

      <Flex as='main' width='100%' mt='8' flexDir='column' gap='8'>
        <Presentation />
        <AboutMe />
        <Skills />
        <Contact />
      </Flex>

      <Footer />
    </>
  );
};

export default Home;
