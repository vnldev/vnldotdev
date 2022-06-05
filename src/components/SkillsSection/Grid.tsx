import { useColorModeValue } from '@chakra-ui/react';
import { fadeIn, MotionSimpleGrid } from '../../styles/animation';
import { Card } from './Card';

export function Grid() {
  const gridBg = useColorModeValue('gray.100', 'blackAlpha.200');
  const gridBorderColor = useColorModeValue('blackAlpha.200', 'blackAlpha.50');

  return (
    <MotionSimpleGrid
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true }}
      variants={fadeIn}
      templateColumns='repeat(4, 1fr)'
      gap={['2', '4', '6', '8', '10']}
      borderWidth='1px'
      borderRadius='8'
      bgColor={gridBg}
      borderColor={gridBorderColor}
      boxShadow='lg'
      justifyItems='center'
      p={['2', '3', '4', '5', '6']}
    >
      <Card path='/techs/html.svg' name='HTML' />
      <Card path='/techs/css.svg' name='CSS' />
      <Card path='/techs/javascript.svg' name='JavaScript' />
      <Card path='/techs/nodejs.svg' name='Node.js' />
      <Card path='/techs/git.svg' name='Git' />
      <Card path='/techs/docker.svg' name='Docker' />
      <Card path='/techs/react.svg' name='React' />
      <Card path='/techs/typescript.svg' name='TypeScript' />
      <Card path='/techs/mysql.svg' name='MySQL' />
      <Card path='/techs/postgresql.svg' name='PostgreSQL' />
      <Card path='/techs/socket-io.svg' name='Socket.io' />
      <Card path='/techs/python.svg' name='Python' />
      <Card path='/techs/go.svg' name='Go' />
      <Card path='/techs/aws.svg' name='AWS' />
      <Card path='/techs/php.svg' name='PHP' />
      <Card path='/techs/mongodb.svg' name='MongoDB' />
      <Card path='/techs/nextjs.svg' name='Next.js' />
      <Card path='/techs/jest.svg' name='Jest' />
      <Card path='/techs/graphql.svg' name='GraphQL' />
      <Card path='/techs/Tux.svg' name='Linux (I use Arch, btw)' />
      <Card path='/techs/jquery.svg' name='jQuery' />
      <Card path='/techs/serverless.svg' name='Serverless Framework' />
      <Card
        path='/techs/styled-components.svg'
        name='Styled-components (CSS-in-JS)'
      />
      <Card path='/techs/express.svg' name='Express Framework' />
    </MotionSimpleGrid>
  );
}
