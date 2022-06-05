import { AiFillMail } from 'react-icons/ai';
import { BsLinkedin, BsWhatsapp, BsInstagram, BsGithub } from 'react-icons/bs';
import { fadeIn, MotionUnorderedList } from '../../styles/animation';
import { Item } from './Item';

export function ContactList() {
  return (
    <MotionUnorderedList
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true }}
      variants={fadeIn}
      my={['8', '9', '10', '12', '12']}
      listStyleType={'none'}
      display='flex'
      alignItems={['flex-start', 'flex-start', 'flex-start', 'center']}
      gap={['2', '4', '5', '6', '10', '12']}
      flexDir={['column', 'column', 'column', 'row']}
    >
      <Item
        url='https://www.linkedin.com/in/victor-nascimento-a753a6173/'
        name='Linkedin'
        icon={AiFillMail}
      />
      <Item url='mailto:contato@vnl.dev' name='E-mail' icon={BsLinkedin} />
      <Item
        url='https://wa.me/message/KGK5YF5AXD2MD1'
        name='WhatsApp'
        icon={BsWhatsapp}
      />
      <Item
        url='https://www.instagram.com/victoraraki_'
        name='Instagram'
        icon={BsInstagram}
      />
      <Item url='https://github.com/vnldev' name='Github' icon={BsGithub} />
    </MotionUnorderedList>
  );
}
