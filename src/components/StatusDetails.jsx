import { Card, CardBody, Box, Text, HStack, Divider, Stack, Flex } from "@chakra-ui/react"
import statusList from '../dataLists/statusList'
import { productDetailsStyles as styles } from "../styles"

const StatusDetails = () => {
  return (
    <HStack gap={'3'} justifyContent={{base:'space-evenly',lg:'flex-end'}}>
      <Card w={{ base: '100%', md:'100%',lg:'100%' }} h={{  md:'10%',lg:'102'}} boxShadow={'rgba(149, 157, 165, 0.2) 0px 8px 24px'}>
        <CardBody p={'20px 15px'}>
          <Flex direction={{ base:'column', md:'column',lg:'row'}} justifyContent={'space-between'} alignItems={{ md:'flex-start',lg:'center'}}>
          {statusList.map((list, i) => (
            <Stack key={i} py={{ base:'3', md:'0',lg:'0'}} direction={{ lg:'row'}} w={{ md:'100%',lg:'30%' }} justifyContent={'space-between'}alignItems={{ md:'center'}} >
              <Stack justifyContent={'space-between'}>
                  <Text {...styles.textStyles} fontWeight="extrabold">{list.title}</Text>
                  <Text p={'0'} fontSize={'22'} fontWeight={'extrabold'}>{list.price}</Text>
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