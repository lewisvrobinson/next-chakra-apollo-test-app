'use client';

import { GET_CHARACTER_BY_ID } from '@/graphql/queries';
import { useQuery } from '@apollo/client';
import {
  HStack,
  Box,
  Image,
  Text,
  Skeleton,
  VStack,
} from '@chakra-ui/react';

function CharacterSkeleton() {
  return (
    <HStack alignItems={'top'} gap={8} wrap="wrap">
      <Skeleton
        height={300}
        width={300}
        borderRadius={'lg'}
        aspectRatio={'1/1'}
      />
      <VStack gap={4}>
        <Skeleton height={4} width={200} />
        <Skeleton height={4} width={200} />
        <Skeleton height={4} width={200} />
      </VStack>
    </HStack>
  );
}

export function CharacterInfo({ characterId }: { characterId: number }) {
  const { loading, error, data } = useQuery(GET_CHARACTER_BY_ID, {
    variables: { id: characterId },
  });

  if (loading) return <CharacterSkeleton />;
  if (error) return <Box>Error: {error.message}</Box>;

  const character = data.character;

  return (
    <HStack alignItems={'top'} gap={8} wrap="wrap">
      <Image src={character.image} alt={character.name} borderRadius={'lg'} />
      <Box as="dl" flex={1}>
        <Text as="dt" mt={2} fontWeight="bold">
          Name
        </Text>
        <Text as={'dd'}>{character.name}</Text>
        <Text as="dt" mt={2} fontWeight="bold">
          Status
        </Text>
        <Text as={'dd'}>{character.status}</Text>
        <Text as="dt" mt={2} fontWeight="bold">
          Species
        </Text>
        <Text as={'dd'}>{character.species}</Text>
        <Text as="dt" mt={2} fontWeight="bold">
          Location
        </Text>
        <Text as={'dd'}>{character.location.name}</Text>
      </Box>
    </HStack>
  );
}
