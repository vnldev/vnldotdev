import { Flex, UnorderedList, ListItem, Icon, Link } from '@chakra-ui/react';
import { AiFillGithub, AiFillLinkedin, AiFillMail } from 'react-icons/ai';
import { NavItem } from './NavItem';

export function Navbar() {
  return (
    <Flex as='nav'>
      <UnorderedList
        styleType='none'
        display='flex'
        alignItems='center'
        fontSize={[9, 10, 11, 12, 13, 14]}
        textAlign='center'
      >
        <NavItem
          name='Github'
          link='https://github.com/vnldev'
          icon={AiFillGithub}
        />
        <NavItem
          name='Linkedin'
          link='https://www.linkedin.com/in/victor-lima-a753a6173/'
          icon={AiFillLinkedin}
        />
        <NavItem name='Contact' link='#contact' icon={AiFillMail} />
      </UnorderedList>
    </Flex>
  );
}
