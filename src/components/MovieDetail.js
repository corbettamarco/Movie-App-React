import { ModalBody,Text } from "@chakra-ui/react"
import { StarIcon } from "@chakra-ui/icons"
function MovieDetail() {

    return (
        <ModalBody>
            <Text fontWeight='bold' mb='1rem'>
                James Bond viene inviato a Istanbul dai sevizi segreti
                inglesi, allo scopo di sottrarre ai russi il lector,
                un decifratore universale ambito nel contempo anche
                da una organizzazione criminosa. Tatiana,
                una segretaria dell'ambasciata russa che
                inconsapevolmente lavora per questa organizzazione,
                viene posta sulla tracce di Bond.
            </Text>
            <Text><b>Anno: </b>2001</Text>
            <Text><b>Cast: </b>mario rossi, mario rossi, mario rossi</Text>
            <Text><b>Rating: </b>4/5  <StarIcon fontSize="sm" mb="1" /></Text>
            <Text><b>Durata: </b>120 MIN</Text>
            <Text count={2} />
        </ModalBody>
    )
}

export default MovieDetail