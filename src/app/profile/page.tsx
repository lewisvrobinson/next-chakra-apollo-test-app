'use client';

import { Avatar, Box, Heading, Stack, Text } from '@chakra-ui/react';
import { UpdateUserForm } from './update-user-form';
import { useAuth } from '@/hooks/auth';

export default function UserDetails() {
  const user = useAuth();

  if (!user) {
    return null;
  }

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
      <Stack spacing={4} alignItems={'center'}>
        <Avatar size={'xl'} name={user.username} />
        <Heading textAlign={'center'}>Edit Profile</Heading>
        <UpdateUserForm user={user} />
      </Stack>
    </Box>
  );
}
