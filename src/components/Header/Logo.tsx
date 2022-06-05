import Link from 'next/link';
import { Flex, Text } from '@chakra-ui/react';

export function Logo() {
  return (
    <Link href='/' passHref>
      <Flex
        as='a'
        href='/'
        fontWeight='300'
        letterSpacing='4px'
        fontSize={['sm', 'md', 'lg', 'xl', '2xl', '3xl']}
        gap='1'
        fontFamily='Montserrat'
        alignItems='center'
      >
        <Text>vnl</Text>
        <Text>.</Text>
        <Text color='pink.500'>dev</Text>
      </Flex>
    </Link>
  );
}
