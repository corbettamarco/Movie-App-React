import {
  Button, Center, Modal, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure
} from '@chakra-ui/react';
import MovieDetail from './MovieDetail';

function Modale() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Center>
        <Button onClick={onOpen} m="2" bg="#1A1C28" textColor="whatsapp.300" _hover={{ bg: "grey" }} w="90%" mb={3} >Informazioni</Button>
      </Center>
      <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose} >
        <ModalOverlay alignSelf="center" />
        <ModalContent>
          <ModalHeader>007, DALLA RUSSIA CON AMORE</ModalHeader>


          <MovieDetail />

          <ModalFooter>
            <Button colorScheme='whatsapp' mr={3} onClick={onClose}>
              Chiudi
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default Modale;