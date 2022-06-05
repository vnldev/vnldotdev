import Link from 'next/link';
import { Icon, Link as ChakraLink, ListItem } from '@chakra-ui/react';
import { IconType } from 'react-icons';

interface NavItemProps {
  name: string;
  link: string;
  icon: IconType;
}

export function NavItem({ name, link, icon }: NavItemProps) {
  const newPage = link.startsWith('http');

  return (
    <ListItem
      _hover={{
        transition: '0.2s',
        bgColor: 'blackAlpha.200',
        color: 'pink.500',
      }}
      display='flex'
      px={['1', '2', '3', '4']}
      h='100%'
    >
      <Link href={link} passHref>
        <ChakraLink
          display='flex'
          alignItems='center'
          gap={['1', '2']}
          target={newPage ? '_blank' : '_self'}
          style={{ textDecoration: 'none' }}
        >
          <Icon as={icon} />
          {name}
        </ChakraLink>
      </Link>
    </ListItem>
  );
}
