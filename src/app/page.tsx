'use client';

import NextLink from 'next/link';
import { useAuth } from '@/hooks/auth';
import { VStack, Heading, Button } from '@chakra-ui/react';

export default function Home() {
  const user = useAuth();
  return (
    <VStack as="main" gap={8} p={8} maxWidth="4xl" marginX="auto">
      <Heading as="h1" size="2xl">
        👋 Welcome, {user?.username}!
      </Heading>
      <Button as={NextLink} href="/characters">Explore characters</Button>
    </VStack>
  );
}
