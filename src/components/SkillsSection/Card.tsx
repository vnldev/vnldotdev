import { useState } from 'react';
import { GridItem, Image, Tooltip, useColorModeValue } from '@chakra-ui/react';

interface CardProps {
  name: string;
  path: string;
}

export function Card({ name, path }: CardProps) {
  const [isLabelOpen, setIsLabelOpen] = useState(false);

  const bgTooltip = useColorModeValue('gray.100', 'gray.900');
  const colorTooltip = useColorModeValue('gray.700', 'gray.300');

  const bgItem = useColorModeValue('blackAlpha.50', 'blackAlpha.300');
  const borderColorItem = useColorModeValue('blackAlpha.100', 'blackAlpha.100');
  const bgItemHover = useColorModeValue('blackAlpha.100', 'blackAlpha.400');

  return (
    <Tooltip
      label={name}
      isOpen={isLabelOpen}
      hasArrow
      color={colorTooltip}
      bgColor={bgTooltip}
      fontSize={['xs', 'sm', 'md']}
    >
      <GridItem
        display='flex'
        alignItems='center'
        w={['16', '20', '24']}
        p='5'
        maxH='28'
        boxShadow='md'
        borderRadius='4px'
        borderWidth='1px'
        borderColor={borderColorItem}
        bgColor={bgItem}
        transition='0.1s'
        _hover={{
          bgColor: bgItemHover,
          transform: 'scale(1.2)',
        }}
        onMouseEnter={() => setIsLabelOpen(true)}
        onMouseLeave={() => setIsLabelOpen(false)}
        onClick={() => setIsLabelOpen(true)}
      >
        <Image src={path} alt={`${name} Logo`} draggable={false} />
      </GridItem>
    </Tooltip>
  );
}
