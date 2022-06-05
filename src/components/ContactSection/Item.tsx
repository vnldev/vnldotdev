import Link from 'next/link';
import { ListItem, Icon, Link as ChakraLink } from '@chakra-ui/react';
import { IconType } from 'react-icons';

interface ItemProps {
  name: string;
  url: string;
  icon: IconType;
}

export function Item({ name, url, icon }: ItemProps) {
  return (
    <ListItem transition='0.1s' cursor='pointer' _hover={{ color: 'pink.500' }}>
      <Link href={url} passHref>
        <ChakraLink
          target='_blank'
          display='flex'
          alignItems='center'
          gap='2'
          fontSize={['12', '13', '14', '15', '16']}
          _hover={{ textDecor: 'none' }}
        >
          <Icon as={icon} />
          {name}
        </ChakraLink>
      </Link>
    </ListItem>
  );
}
