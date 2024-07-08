'use client';

import { useAuth } from '@/hooks/auth';
import {
  Avatar,
  Box,
  Button,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Link,
} from '@chakra-ui/react';
import NextLink from 'next/link';

export function Header() {
  const user = useAuth();
  return (
    <Box as="header" borderBottomWidth={1} marginBottom={8}>
      <Flex
        h={16}
        alignItems={'center'}
        justifyContent={'space-between'}
        maxWidth="4xl"
        marginX="auto"
        px={8}
      >
        <Link as={NextLink} href={'/'}fontSize={'2xl'}>📺</Link>
        <Flex alignItems={'center'}>
          <Menu>
            <MenuButton
              as={Button}
              rounded={'full'}
              variant={'link'}
              cursor={'pointer'}
              minW={0}
            >
              <Avatar size={'xs'} name={user?.username} />
            </MenuButton>
            <MenuList>
              <MenuItem as={NextLink} href="/profile">Edit profile</MenuItem>
              <MenuItem>Logout 👋</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </Flex>
    </Box>
  );
}
