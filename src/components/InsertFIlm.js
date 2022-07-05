import { ArrowDownIcon, StarIcon } from '@chakra-ui/icons';
import { Box, Button, Center, CloseButton, Flex, HStack, Img, Input, Select, Spacer, Text, VStack } from "@chakra-ui/react";
import { useEffect, useState } from 'react';

const InsertFilm = (props) => {

  const {movies}=props;

  const [tipology, setTipology] = useState("movie");
  const [state, setState] = useState("typing");
  const [titolo, setTitolo] = useState("");
  const [anno, setAnno] = useState("");
  const [complete, setComplete] = useState("false");

  useEffect(() => { setComplete("false")}, [movies] )

  const insertHandler = () => {
    setTimeout(setState("typing"), 1000)
    setComplete("true");

  };

  return (

    <>
      {complete === "false" ? (

        <Center>
          <Flex alignItems='center' >
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
                Inserisci</Text>
              <Spacer />
              <HStack gap='2' m="5" flex='1' >
                <Select icon={<ArrowDownIcon borderRadius={50} bgColor={"whatsapp.300"} />} onClick={(e) => { setTipology(e.target.value); setState("typing") }} textColor="whatsapp.300" borderColor={'whatsapp.300'} mb="2"  >
                  <option value='movie' style={{ backgroundColor: "black" }}>FILM</option>
                  <option value='series' style={{ backgroundColor: "black" }}>SERIE</option>
                  <option value='game' style={{ backgroundColor: "black" }}>GIOCHI</option>
                </Select>
                <VStack>

                  <Input onChange={(e) => { setState("typing"); setTitolo(e.target.value) }}
                    disabled={state === "inserting"}
                    placeholder='Titolo' textColor="whatsapp.300" borderColor={'whatsapp.300'} textTransform="uppercase" maxW="fit-content" a />

                  <Input onChange={(e) => { setState("typing"); setAnno(e.target.value) }}
                    disabled={state === "inserting"}
                    placeholder='Anno' textColor="whatsapp.300" borderColor={'whatsapp.300'} textTransform="uppercase" minW="fit-content" a />
                </VStack>
                <Button bg='whatsapp.300'
                  width="30%"
                  disabled={state === "inserting" || titolo === "" || anno === ""}
                  onClick={(titolo, anno, tipology) => { setState("inserting"); insertHandler(titolo, anno, tipology) }}>Inserisci</Button>
              </HStack>
            </VStack>
          </Flex>
        </Center>) :

        (<>

          <Box maxW='sm' borderWidth='2px' borderRadius='lg' overflow='hidden' bg="black" maxH="650px">
            <CloseButton
              size="lg"
              mt="5px"
              marginLeft={"5px"}
              bg="whatsapp.300"
              position={"absolute"}
              _hover={{ bg: "red" }}
              onClick={() => { setComplete("false"); setAnno(""); setTitolo("") }} />
            <Center>
              <Img alt={titolo} h="425px" w="100%" />
            </Center>

            <Box p='6'>
              <Box display='flex' alignItems='baseline'>

                <Box
                  color='gray.400'
                  fontWeight='semibold'
                  letterSpacing='wide'
                  fontSize='s'
                  textTransform='uppercase'

                >
                  <StarIcon fontSize="sm" mb="1" /> &bull; {anno}
                </Box>
              </Box>

              <Box
                mt='1'
                fontWeight='semibold'
                as='h3'
                fontSize='lg'
                lineHeight='tight'
                noOfLines={1}
                textColor="white"
              >
                {titolo}
              </Box>

              <Box
                color='gray.400'
                fontWeight='semibold'
                letterSpacing='wide'
                fontSize='s'
                textTransform='uppercase'

                mt="2">
                {tipology}
                <Box as='span' color='gray.600' fontSize='sm'>

                </Box>
              </Box>
              <Box display='flex' mt='2' alignItems='center'>

              </Box>
            </Box>


          </Box>

        </>)}

    </>
  );
}


export default InsertFilm;

