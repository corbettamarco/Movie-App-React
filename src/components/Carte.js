import { Box, Image,Text } from '@chakra-ui/react';
import locandina from "../images/locandina.jpg";
import Modale from './Modale';
import { StarIcon } from '@chakra-ui/icons';

export const movies = [

    {

        title: "007, DALLA RUSSIA CON AMORE",

        year: 2001,

        duration:"120 min",
        
        ratings: "4/5"

    },

    {

        title: "G.I. JOE: LA NASCITA DEI COBRA",

        year: 2005,

        duration:"120 min",
        
        ratings: "4/5"

    },

    {

        title: "C'ERA UNA VOLTA A NEW YORK",

        year: 2008,

        duration:"120 min",
        
        ratings: "4/5"

    },

    {

        title: "HACHIKO - IL TUO MIGLIORE AMICO",

        year: "2001",

        duration:"120 min",
        
        ratings: "4/5"

    },

    {

        title: "007 IL DOMANI NON MUORE MAI",

        year: 2005,

        duration:"120 min",
        
        ratings: "4/5"

    },

    {

        title: "Terminator 3",

        year: 2008,

        duration:"120 min",
        
        ratings: "4/5"

    }

    

];


function Carte() {

    

    return (<>
        {
            movies.map(movies =>

                <Box maxW='sm' borderWidth='2px' borderRadius='lg' overflow='hidden' bg="black" >
                <Image src={locandina} alt="Image Not Found" />
          
                <Box p='6'>
                  <Box display='flex' alignItems='baseline'>
                    
                    <Box
                      color='gray.400'
                      fontWeight='semibold'
                      letterSpacing='wide'
                      fontSize='s'
                      textTransform='uppercase'
                     
                    >
                      {movies.year} &bull; {movies.ratings} <StarIcon fontSize="sm" mb="1" />
                    </Box>
                  </Box>
          
                  <Box
                    mt='1'
                    fontWeight='semibold'
                    as='h3'
                    fontSize='lg'
                    lineHeight='tight'
                    noOfLines={1}
                    textColor="white"
                  >
                    {movies.title}
                  </Box>
          
                  <Box
                   color='gray.400'
                   fontWeight='semibold'
                   letterSpacing='wide'
                   fontSize='s'
                   textTransform='uppercase'
                   
                   mt="2">
                    {movies.duration}
                    <Box as='span' color='gray.600' fontSize='sm'>

                    </Box>
                  </Box>
                  <Box display='flex' mt='2' alignItems='center'>
                    
                  </Box>
                </Box>
                <Modale />
              </Box>
            )
            
        }
    </>)
}

export default Carte;