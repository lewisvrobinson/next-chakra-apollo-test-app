'use client';

import { useState, useEffect } from 'react';
import NextLink from 'next/link';
import { useSearchParams } from 'next/navigation';
import { Flex, Image, SimpleGrid, VStack } from '@chakra-ui/react';
import { useQuery } from '@apollo/client';
import { GET_PAGINATED_CHARACTERS } from '@/graphql/queries';
import { Box, Spinner, Text, Button } from '@chakra-ui/react';
import { CharactersResponse } from '@/graphql/types';

export function CharacterList() {
  const searchParams = useSearchParams();
  const [page, setPage] = useState(1);
  const { loading, error, data } = useQuery<CharactersResponse>(
    GET_PAGINATED_CHARACTERS,
    {
      variables: { page },
    }
  );

  const urlForPage = (page: number) => {
    const url = new URL(window.location.href);
    url.searchParams.set('page', String(page));
    return url.toString();
  };

  const nextPage = data?.characters.info.next;
  const prevPage = data?.characters.info.prev;
  const nextPageUrl = nextPage ? urlForPage(nextPage) : '';
  const prevPageUrl = prevPage ? urlForPage(prevPage) : '';

  useEffect(() => {
    // Initialize the page number from the URL query parameter
    const pageParam = searchParams.get('page');
    if (pageParam) {
      setPage(Number(pageParam));
    }
  }, [searchParams]);

  if (loading || !data) return <Spinner />;
  if (error) return <Text>Error: {error.message}</Text>;

  return (
    <Box w="100%">
      <SimpleGrid minChildWidth={150} spacing={3}>
        {data?.characters.results.map((character) => (
          <VStack
            passHref
            as={NextLink}
            href={`/characters/${character.id}`}
            key={character.id}
            padding={2}
            borderWidth="1px"
            borderRadius="md"
            justifyContent={'space-between'}
            transition={'all 0.2s ease-in-out'}
            _hover={{
              shadow: 'lg',
              transform: 'scale(1.04)',
            }}
            _focusVisible={{
              shadow: 'lg',
              transform: 'scale(1.04)',
            }}
          >
            <Text fontWeight="bold" fontSize="lg">
              {character.name}
            </Text>
            <Image
              src={character.image}
              alt={character.name}
              borderRadius="md"
              aspectRatio={1 / 1}
            />
          </VStack>
        ))}
      </SimpleGrid>
      <Flex mt={4} justifyContent="space-between">
        <Button as={NextLink} href={prevPageUrl} isDisabled={!prevPageUrl}>
          Previous
        </Button>
        <Button as={NextLink} href={nextPageUrl} isDisabled={!nextPageUrl}>
          Next
        </Button>
      </Flex>
    </Box>
  );
}
