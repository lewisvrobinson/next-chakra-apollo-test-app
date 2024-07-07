import { Box, Heading } from '@chakra-ui/react';

export default function Home() {
  return (
    <Box as="main" gap={8} p={8} maxWidth="4xl" marginX="auto">
      <Heading as="h1" size="2xl">
        Welcome.
      </Heading>
    </Box>
  );
}
