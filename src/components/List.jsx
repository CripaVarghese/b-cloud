import { Box, HStack,Stack } from '@chakra-ui/react'
import buttonList from '../dataLists/buttonList'

const List = () => {
  return (
    <Stack justifyContent={'space-between'} height={10} w={'100%'} >
    {buttonList.map( (list,i) => (
      <HStack key = {i} border={'1px solid #0063FF'} borderRadius={5} p={'13px 15px'}  m={'5px 0px'} color="#0063FF" _hover={{ bg: "#0063FF", color: "white" }}> 
            <list.svg hover={{color:'white'}} />
            <Box
            key = {i}
            href={list.href ?? '#'}
            fontSize={'11'}
            fontWeight={'extrabold'}
            >
            {list.title}
            </Box>
      </HStack>
    ))}
    </Stack>
  )
}

export default List