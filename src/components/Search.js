import { Button, Flex, HStack, Input, Spacer } from '@chakra-ui/react';


function Search(){
    return(
        <>
        <Spacer />
        <Flex  alignItems='center' gap='2'>
        <HStack gap='2' m="5" flex='1'>   
          <Input placeholder='Cerca' textColor="whatsapp.300" borderColor={'whatsapp.300'} textTransform="uppercase" />
          <Button bg='whatsapp.300'>Cerca</Button>
        </HStack>
      </Flex>
     </>
  );
}



export default Search;