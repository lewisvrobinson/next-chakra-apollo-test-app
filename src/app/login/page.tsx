import { Container, Heading, Stack } from '@chakra-ui/react';
import { LoginForm } from './login-form';

export default function Login() {
  return (
    <Container as="main" minH="100svh" py={16}>
      <Stack spacing={8}>
        <Heading as="h1" textAlign={'center'}>
          Login
        </Heading>
        <LoginForm />
      </Stack>
    </Container>
  );
}
