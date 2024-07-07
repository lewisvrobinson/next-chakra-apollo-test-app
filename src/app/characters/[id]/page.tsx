import { CharacterInfo } from '@/components/character-detail';
import { Box } from '@chakra-ui/react';

export default function CharacterPage({ params }: { params: { id: string } }) {
  return (
    <Box as="main" gap={8} p={8} maxWidth="4xl" marginX="auto">
      <CharacterInfo characterId={Number(params.id)} />
    </Box>
  );
}
