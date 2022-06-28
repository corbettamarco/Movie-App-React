import { ModalBody,Text } from "@chakra-ui/react"
import { StarIcon } from "@chakra-ui/icons"
function MovieDetail(props) {
    const {currentMovie}=props;

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
            <Text><b>Anno: </b>{currentMovie.Year}</Text>
            <Text><b>Cast: </b>{currentMovie.Plot}</Text>
            <Text><b>Rating: </b>{currentMovie.imdbRating}  <StarIcon fontSize="sm" mb="1" /></Text>
            <Text><b>Durata: </b>120 MIN</Text>
            <Text textTransform='uppercase'><b>Tipo: </b>{currentMovie.Type}</Text>
            <Text count={2} />
        </ModalBody>
    )
}

export default MovieDetail