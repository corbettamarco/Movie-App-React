import { Button, Flex, HStack, Input, Spacer } from '@chakra-ui/react';
import { useState } from 'react';

function Search(props){
  const{searchCallback}=props;

  const [keywords, setKeywords] = useState("");
 
  const inputHandler = (e) => {
    setKeywords( e.target.value.toLowerCase());
  };

    return(
        <>
        <Spacer />
        <Flex  alignItems='center' gap='2'>
        <HStack gap='2' m="5" flex='1'>   
          <Input onChange={inputHandler} placeholder='Cerca' textColor="whatsapp.300" borderColor={'whatsapp.300'} textTransform="uppercase" />
          <Button bg='whatsapp.300' onClick={()=>searchCallback(keywords)}>Cerca</Button>
        </HStack>
      </Flex>
     </>
  );
}



export default Search;