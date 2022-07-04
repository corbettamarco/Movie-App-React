import { Center, Text } from '@chakra-ui/react';

const NoResults = () => {
    return (<Center>

        <Text as="u"
            fontFamily='fantasy'
            p="10px"
            m="2"
            textUnderlineOffset={2}
            fontSize='lg'
            color="whatsapp.300"
            style={{ fontSize: "2rem", fontWeight: "normal" }}>
            Nessun Risultato
        </Text>
    </Center>
    )
}

export default NoResults;