import { Flex, Image, Text } from '@chakra-ui/react';
import logo from '../images/logo1.png';



function Titolo() {
    return (
        <Flex>
            <Image src={logo} boxSize='70px' m="2"
                objectFit='cover' borderRadius="100"
                display={{ base: "none", sm: "inline-flex" }} />
            <Text as="h1"
                color="whatsapp.300"
                fontFamily='Brush Script MT'
                fontSize={{ base: '2.5rem', sm: '3rem', lg: '3rem' }}
                style={{ margin: "20px", fontWeight: "bold" }}
            >

                MovieApp
            </Text>

        </Flex>
    )
}

export default Titolo;