import { Center, Text } from '@chakra-ui/react';
import { getMovies } from '../api/getMovies';

const movies = getMovies();
const lentgh = movies.Search.length;
const Risultati = () => {
    return (<Center>

        <Text as="u"
            fontFamily='fantasy'
            p="10px"
            m="2"
            mb="-2"
            textUnderlineOffset={2}
            fontSize='lg'
            color="whatsapp.300"
            style={{ fontSize: "2rem", fontWeight: "normal" }}>

            {lentgh} Risultati

        </Text>
    </Center>
    )
}

export default Risultati;