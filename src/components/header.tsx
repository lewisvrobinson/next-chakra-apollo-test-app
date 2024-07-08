'use client';

import {
  Avatar,
  Box,
  Button,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from '@chakra-ui/react';
import NextLink from 'next/link';

export function Header() {
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
        <Text fontSize={'2xl'}>📺</Text>
        <Flex alignItems={'center'}>
          <Menu>
            <MenuButton
              as={Button}
              rounded={'full'}
              variant={'link'}
              cursor={'pointer'}
              minW={0}
            >
              <Avatar size={'xs'} />
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
