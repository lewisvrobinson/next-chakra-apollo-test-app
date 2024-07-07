'use client';

import { CharacterInfo } from '@/components/character-detail';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react';
import { useRouter } from 'next/navigation';

export function CharacterModal({ characterId }: { characterId: number }) {
  const router = useRouter();

  return (
    <Modal isOpen={true} onClose={router.back}>
      <ModalOverlay />
      <ModalContent maxWidth={'2xl'} p={8} mx={8}>
        <ModalCloseButton />
        <ModalBody>
          <CharacterInfo characterId={characterId} />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
