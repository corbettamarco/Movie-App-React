import { HamburgerIcon } from '@chakra-ui/icons';
import { Box, Flex, HStack, Image, Text } from '@chakra-ui/react';
import Search from './Search';
import Titolo from './Titolo';

import {
      CloseButton, Heading, IconButton, useDisclosure
} from "@chakra-ui/react";


function Navbar() {
      const mobileNav = useDisclosure();
      return (
            <>
            <Heading
                   bg="black"
                   w="full"
                   px={{ base: 2, sm: 4 }}
                   py={4}
                   shadow="md"
            >
                   <Flex alignItems="center" justifyContent="space-between" mx="auto">
                        <Titolo />
                        <HStack display="flex" alignItems="center" spacing={1}>
                               <HStack
                                    spacing={1}
                                    mr={5}
                                     color="brand.500"
                                     display={{ base: "none", md: "inline-flex" }}
                              >
                                    <Search />

                              </HStack>

                              <Box display={{ base: "inline-flex", md: "none" }}>
                                    <IconButton
                                          display={{ base: "flex", md: "none" }}
                                           aria-label="Open menu"
                                           fontSize="20px"
                                           bg="whatsapp.300"
                                           variant="solid"
                                           mr="5"
                                            icon={<HamburgerIcon />}
                                            onClick={mobileNav.onOpen}
                                            size='lg'
                                     />

                                     <HStack
                                          pos="absolute"
                                          top={0}
                                           left={0}
                                           right={0}
                                           display={mobileNav.isOpen ? "flex" : "none"}
                                           flexDirection="row"
                                            p={2}
                                            pb={4}
                                            m={2}
                                            bg="black"
                                           spacing={1}
                                           rounded="sm"
                                           shadow="sm"
                                    >
                                          <CloseButton
                                                 aria-label="Close menu"
                                                 onClick={mobileNav.onClose}
                                                 bg="whatsapp.300"
                                                 size='lg'
                                                 _hover={{ bg: "red" }}
                                            />

                                          <Search />
                                    </HStack>
                               </Box>
                          </HStack>
                   </Flex>
            </Heading>
        </>
      );
}



export default Navbar;