import { HamburgerIcon, SearchIcon } from '@chakra-ui/icons';
import { Box, CloseButton, HStack, IconButton } from '@chakra-ui/react';
import Search from './Search';

const MobileNavbar = (props) => {
    const { mobileNav,searchCallback } = props;

    return (
        <Box display={{ base: "inline-flex", md: "none" }} >
            <IconButton
                display={{ base: "flex", md: "none" }}
                aria-label="Open menu"
                fontSize="20px"
                bg="whatsapp.300"
                variant="solid"
                icon={<SearchIcon />}
                onClick={mobileNav.onOpen}
                size='lg'
                className={!mobileNav.isOpen ? "beacon" : ""}
                mr={'1rem'}
            />

            <HStack
                pos="absolute"
                top={2}
                left={0}
                right={0}
                display={mobileNav.isOpen ? "flex" : "none"}
                p={2}
                pb={4}
                
                bg="black"
                spacing={1}
                
                align={'baseline'}
                justifyContent={'space-between'}
            >
                <CloseButton
                    aria-label="Close menu"
                    onClick={mobileNav.onClose}
                    bg="whatsapp.300"
                    size='lg'
                    _hover={{ bg: "red" }}
                />
           

                <Search searchCallback={searchCallback}/>
            </HStack>
        </Box>
    )
}

export default MobileNavbar;