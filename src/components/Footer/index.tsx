import { Flex, Text } from '@chakra-ui/react';

export function Footer() {
  return (
    <Flex
      as='footer'
      fontSize={['xs', 'sm', 'md']}
      alignItems='center'
      justifyContent='center'
      p='4'
    >
      <Text>
        Made with{' '}
        <Text as='span' color='red' verticalAlign='middle'>
          ❤
        </Text>{' '}
        by&nbsp;
        <Text
          color='pink.500'
          as='span'
          fontFamily='Montserrat'
          fontWeight='300'
        >
          Victor Nascimento de Lima
        </Text>
        &nbsp;&copy; 2022
      </Text>
    </Flex>
  );
}
