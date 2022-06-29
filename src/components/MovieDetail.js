import { ModalBody, Text, ModalHeader } from "@chakra-ui/react"
import { StarIcon } from "@chakra-ui/icons"
function MovieDetail(props) {
    const { currentMovie } = props;

    return (
        <>
            <ModalHeader>{currentMovie.Title}</ModalHeader>
            <ModalBody>
                <Text fontWeight='bold' mb='1rem'>
                    {currentMovie.Plot}
                </Text>
                <Text><b>Anno: </b>{currentMovie.Year}</Text>
                <Text><b>Cast: </b>{currentMovie.Actors}</Text>
                <Text><b>Rating: </b>{currentMovie.imdbRating}  <StarIcon fontSize="sm" mb="1" /></Text>
                <Text><b>Durata: </b>{currentMovie.Runtime}</Text>
                <Text textTransform='uppercase'><b>Tipo: </b>{currentMovie.Type}</Text>
                <Text count={2} />
            </ModalBody>
        </>
    )
}

export default MovieDetail