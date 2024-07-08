'use client';

import { useFormState } from 'react-dom';
import { login } from '@/app/actions/auth';
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Stack,
} from '@chakra-ui/react';

export function LoginForm() {
  const [{ errors }, action] = useFormState(login, { errors: {} });

  return (
    <Box
      as="form"
      action={action}
      maxW="md"
      borderWidth="1px"
      borderRadius="lg"
      p="6"
      w="full"
      mx="auto"
    >
      <Stack spacing="4" justifyContent="center">
        <FormControl id="username" isInvalid={Boolean(errors?.username)}>
          <FormLabel>Username</FormLabel>
          <Input type="text" name="username" />
          {errors?.username ?? (
            <FormErrorMessage>{errors?.username}</FormErrorMessage>
          )}
        </FormControl>
        <FormControl id="title" isInvalid={Boolean(errors?.title)}>
          <FormLabel>Job title</FormLabel>
          <Input type="text" name="title" />
          {errors?.title ?? (
            <FormErrorMessage>{errors?.title}</FormErrorMessage>
          )}
        </FormControl>

        <Button type="submit">Submit</Button>
      </Stack>
    </Box>
  );
}
