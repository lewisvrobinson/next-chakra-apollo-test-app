'use client';

import { ChakraProvider as Chakra, extendTheme } from '@chakra-ui/react';

const theme = extendTheme({});

export function ChakraProvider({ children }: { children: React.ReactNode }) {
  return <Chakra theme={theme}>{children}</Chakra>;
}
