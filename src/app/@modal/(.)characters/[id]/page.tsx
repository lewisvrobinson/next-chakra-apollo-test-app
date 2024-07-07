import { CharacterModal } from './modal';

export default function CharacterModalPage({
  params,
}: {
  params: { id: string };
}) {
  return <CharacterModal characterId={Number(params.id)} />;
}
