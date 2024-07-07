import { VStack, Heading } from '@chakra-ui/react';
import { CharacterList } from './list';

export default function ListPage() {
  return (
    <VStack as="main" gap={8} p={8} maxWidth="4xl" marginX="auto">
      <Heading as="h1" size="2xl">
        Characters
      </Heading>
      <CharacterList />
    </VStack>
  );
}
