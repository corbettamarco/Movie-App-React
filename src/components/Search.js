import { ArrowDownIcon } from '@chakra-ui/icons';
import { Button, Center, Flex, HStack, Input, Select, Spacer, Stack } from '@chakra-ui/react';
import { useState } from 'react';

function Search(props) {
  const { searchCallback } = props;
  const [keywords, setKeywords] = useState("");
  const [tipology, setTipology] = useState("movie");
  const [state, setState] = useState("searching");

  const inputHandler = (e) => {
    setKeywords(e.target.value.toLowerCase());
  };

  return (
    <>
      

      <Flex >
        <Stack gap='2' m="5" flex='1' align={'baseline'} direction={["column","row","row","row","row"]} w={['70vw','70vw','auto','auto','auto']}>
          <Select  icon={<ArrowDownIcon borderRadius={50} mt="2" bgColor={"whatsapp.300"} />} onClick={(e) => { setTipology(e.target.value); setState("typing") }} textColor="whatsapp.300" borderColor={'whatsapp.300'} mb="2"  >
            <option value='movie' style={{ backgroundColor: "black" }}>FILM</option>
            <option value='series' style={{ backgroundColor: "black" }}>SERIE</option>
            <option value='game' style={{ backgroundColor: "black" }}>GIOCHI</option>
          </Select>
          <Input onChange={(e) => { inputHandler(e); setState("typing") }} placeholder='Cerca' textColor="whatsapp.300" borderColor={'whatsapp.300'} textTransform="uppercase"  />
         
          <Button bg='whatsapp.300'
            width="30%"
            disabled={state === "searching" || keywords === ""}
            onClick={() => { searchCallback(keywords, tipology); setState("searching") }}>Cerca</Button>
       </Stack>
      </Flex> 
    </>
  );
}



export default Search;