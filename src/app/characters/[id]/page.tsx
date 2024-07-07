import { CharacterInfo } from '@/components/character-detail';

export default function CharacterPage({ params }: { params: { id: string } }) {
  return <CharacterInfo characterId={Number(params.id)} />;
}
