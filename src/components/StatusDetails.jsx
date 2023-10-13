import { Card, CardBody, Box, Text, HStack, Divider, Stack, Flex } from "@chakra-ui/react"
import statusList from '../dataLists/statusList'
import { productDetailsStyles as styles } from "../styles"

const StatusDetails = () => {
  return (
    <HStack gap={'3'} justifyContent={{base:'space-evenly',lg:'flex-end'}}>
      <Card w={{ base: '100%',md:'80%',lg:'100%' }} h={{  md:'auto',lg:'102'}} boxShadow={'0px -9px 34px -3px rgba(0,0,0,0.1),0px 10px 15px -3px rgba(0,0,0,0.1)'}>
        <CardBody p={'20px 18px'}>
          <Flex direction={{ base:'column', md:'column',lg:'row'}} justifyContent={'space-between'} alignItems={{ md:'flex-start',lg:'center'}}>
          {statusList.map((list, i) => (
            <Stack key={i} py={{ base:'3', md:'3',lg:'0'}} direction={{ lg:'row'}} w={{ md:'100%',lg:'30%' }} justifyContent={'space-between'}alignItems={{ md:'center'}} >
              <Stack justifyContent={'space-between'}>
                  <Text {...styles.textStyles}>{list.title}</Text>
                  <Text fontSize={'22'} fontWeight={'extrabold'}>{list.price}</Text>
              </Stack>
              <Box>
                {<list.svg fontSize="2px" width="40" height="40" fontWeight="30" color={list.color}/>}
              </Box>
            {/* <Divider orientation={{ md:'horizontal',lg:'vertical'}} /> */}
            </Stack>
          ))}
            </Flex>
        </CardBody>
      </Card>
    </HStack>

  )
}

export default StatusDetails