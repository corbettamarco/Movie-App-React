import { Center, Text } from '@chakra-ui/react';

const Risultati = (props) => {
const {numeroFilm}=props;
    return (<Center>

        <Text as="u"
            fontFamily='fantasy'
            p="10px"
            m="2"
            mb="-2"
            textUnderlineOffset={2}
            fontSize='lg'
            color="whatsapp.300"
            style={{ fontSize: "2rem", fontWeight: "normal" }}>

            {numeroFilm.length>0 ?
             "Risultati : " + numeroFilm.length : ""}

        </Text>
    </Center>
    )
}

export default Risultati;