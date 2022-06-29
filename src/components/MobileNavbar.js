import { HamburgerIcon } from '@chakra-ui/icons';
import { Box, CloseButton, HStack, IconButton } from '@chakra-ui/react';
import Search from './Search';

const MobileNavbar = (props) => {
    const { mobileNav } = props;

    return (
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
                top={2}
                left={0}
                right={0}
                display={mobileNav.isOpen ? "flex" : "none"}
                flexDirection="row"
                p={2}
                pb={4}
                m={2}
                bg="white"
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
    )
}

export default MobileNavbar;