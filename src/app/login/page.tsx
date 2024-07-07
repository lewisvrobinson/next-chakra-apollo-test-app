import { Box, Container, Heading, Stack } from '@chakra-ui/react';
import { LoginForm } from './login-form';

export default function Login() {
  return (
    <Box
      as="main"
      gap={8}
      px={8}
      py={16}
      maxWidth="4xl"
      marginX="auto"
      minH="100svh"
    >
      <Stack spacing={8}>
        <Heading as="h1" textAlign={'center'}>
          Login
        </Heading>
        <LoginForm />
      </Stack>
    </Box>
  );
}
