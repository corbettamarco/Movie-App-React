import { Grid, Box, Text, Image, Avatar, Center } from '@chakra-ui/react'
import logo from './logo1.png'
export const movies = [

    {

        title: "Terminator",

        year: "2001"

    },

    {

        title: "Terminator 2",

        year: 2005

    },

    {

        title: "Terminator 3",

        year: 2008

    }

];

function Carte() {
    return (
        
        <Grid templateColumns="repeat(3, 1fr)" gap={4} width="80%" p="10px">

            {movies.map(movies =>
                <Box
                    w="100%"
                    h="40vh"
                    minH="50%"
                    maxW="90%"
                    bg="red"
                    border="2px"
                    p="10"
                    backgroundImage={logo}
                    backgroundPosition="center"
                    backgroundRepeat="no-repeat"
                >
                    <Center>
                        <Box paddingBottom={10} >
                            <Text w="150px" noOfLines={1} fontSize='2xl' bg="grey" align="center" >{movies.title} </Text>
                        </Box>
                    </Center>
                    <Center>
                        <Box paddingBottom={10}>
                            <Text w="80px" noOfLines={1} fontSize='lg' bg="grey" align="center">{movies.year}</Text>
                        </Box>
                    </Center>
                </Box>
            )
            }

        </Grid>
    )
}

export default Carte;