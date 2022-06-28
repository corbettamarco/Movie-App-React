import { Center, Divider, SimpleGrid, Text } from '@chakra-ui/react';
import { movies } from './Carte';
import Carte from './Carte.js';
function Griglia() {


    return (

        <>
            <Center>

                <Text as="u"
                    fontFamily='fantasy'
                    p="10px" 
                    m="2" 
                    mb="-2"
                    textUnderlineOffset={2}
                    fontSize='lg'
                    color="whatsapp.300"
                    style={{ fontSize: "2rem", fontWeight: "normal" }}>

                    {movies.length} Risultati 

                </Text>
            </Center>
            <Center >
                <Divider orientation='horizontal' m="5" w="100%" />
            </Center>
            <Center>
                <SimpleGrid minChildWidth='250px' gap={6} width="80%" p="10px">
                    <Carte />

                </SimpleGrid>
            </Center>
        </>
    )
}

export default Griglia;