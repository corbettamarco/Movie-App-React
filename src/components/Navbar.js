
import { Box, Flex, Heading, HStack, useDisclosure } from '@chakra-ui/react';
import MobileNavbar from './MobileNavbar';
import Search from './Search';
import Titolo from './Titolo';


function Navbar(props) {
      const mobileNavMenu = useDisclosure();
      const { searchCallback } = props;
      return (
            <Box position={"sticky"} top={"0"} >
           
                  <Heading
                        bg="black"
                        w="full"
                        px={{ base: 2, sm: 4 }}
                        py={4}
                        shadow="md"
                        
                  >
                        <Flex justifyContent="space-between" mx="auto" >
                              <Titolo />
                              <HStack display="flex"  spacing={1}>
                                    <HStack
                                          spacing={1}
                                          mr={5}
                                          color="brand.500"
                                          display={{ base: "none", md: "inline-flex" }}
                                    >
                                          <Search searchCallback={searchCallback} />
                                    </HStack>
                                    <MobileNavbar mobileNav={mobileNavMenu} searchCallback={searchCallback} />
                              </HStack>
                        </Flex>
                  </Heading>
            </Box>
      );
}



export default Navbar;