import { Center, Text, VStack } from '@chakra-ui/react';

const Risultati = (props) => {
    const { numeroFilm } = props;
    return (
        <>
            <Center>
                <VStack>
                    <Text as="u"
                        fontFamily='fantasy'
                        p="10px"
                        m="2"
                        mb="-2"
                        textUnderlineOffset={2}
                        fontSize='lg'
                        color="whatsapp.300"
                        style={{ fontSize: "2rem", fontWeight: "normal" }}>

                        {numeroFilm.length > 0 ?
                            "Risultati : " + numeroFilm.length : ""}

                    </Text>
                </VStack>
            </Center>
        </>
    )
}

export default Risultati;