import{Flex,Image,Text} from '@chakra-ui/react';
import logo from '../images/logo1.png';


function Titolo(){
    return (
        <Flex>
            <Image src={logo} boxSize='70px' m="2" 
                objectFit='cover' borderRadius="100" />
            <Text as="h1" 
            color="whatsapp.300" 
            fontFamily= 'Brush Script MT'
            style={{ margin: "20px", fontSize: "3rem", fontWeight: "bold" }}>
                MovieApp
            </Text>

        </Flex>
    )
}

export default Titolo;