import { motion } from 'framer-motion';
import {
  Container,
  ContainerProps,
  Flex,
  FlexProps,
  Heading,
  HeadingProps,
  Text,
  TextProps,
  SimpleGrid,
  SimpleGridProps,
  UnorderedList,
  ListProps,
  Image,
  ImageProps,
} from '@chakra-ui/react';

export const fadeIn = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delay: 0.4,
      delayChildren: 0.4,
      staggerChildren: 0.4,
    },
  },
};

export const slideFromLeft = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.4,
      delayChildren: 0.4,
      staggerChildren: 0.4,
    },
  },
};

export const slideFromRight = {
  hidden: { opacity: 0, x: 100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.4,
      delayChildren: 0.4,
      staggerChildren: 0.4,
    },
  },
};

export const slideFromBottom = {
  hidden: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.4,
      delayChildren: 0.4,
      staggerChildren: 0.4,
    },
  },
};

export const slideFromTop = {
  hidden: {
    y: -60,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.4,
      delayChildren: 0.4,
      staggerChildren: 0.4,
    },
  },
};

export const MotionFlex = motion<FlexProps>(Flex);

export const MotionSimpleGrid = motion<SimpleGridProps>(SimpleGrid);

export const MotionText = motion<TextProps>(Text);

export const MotionHeading = motion<HeadingProps>(Heading);

export const MotionUnorderedList = motion<ListProps>(UnorderedList);

export const MotionContainer = motion<ContainerProps>(Container);

export const MotionImage = motion<ImageProps>(Image);
