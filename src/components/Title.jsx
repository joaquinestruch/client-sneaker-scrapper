import React from 'react'
import { Flex, Text} from '@chakra-ui/react'
import "../components/nav/nav.css"

function Title() {
  return (
    <Flex
      justifyContent={"flex-start"}
      
      padding={"10px"}
      
    >
      
        <Text
          bgGradient="linear(to-l, #3182ce, #0064fa)"
          bgClip="text"
          fontSize="4xl"
          fontWeight="extrabold"
          className='titleText'
        >
          Sneaker Scrapper
        </Text>
      
    </Flex>
  );
}

export default Title