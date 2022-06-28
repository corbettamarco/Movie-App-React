import { Container, Box, Text } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
import logo from './logo1.png'
import './App.css';

function Navbar() {
      return (<Container maxWidth="100%" bg="black" h="10vw" maxH="100px">
            <Box style={{ display: "inline-flex" }}>
                  <Image src={logo} boxSize='70px' m="2"
                        objectFit='cover' />
                  <Text as="h1" style={{ margin: "20px", color: "white", fontSize: "2rem", fontWeight: "bold" }}>MovieApp</Text>

            </Box>

      </Container>)

}

export default Navbar;