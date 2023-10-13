import { Card , CardBody, Text, Stack, Flex } from "@chakra-ui/react"
import { DoughnutDetails } from "./DoughnutDetails"
import {productDetailsStyles as style} from "../styles"

const CustomProduct= () => {
  return (
    <Stack>
        <Text color={'#0063FF'} {...style.lgFontStyles}>
        Custom Product Insights
        </Text>
    
        <Card maxW='sm' h={'450'} borderTop={'5px solid #0063FF'} borderRadius={'15'}>
            <CardBody p='7' >
            <Flex flexDirection={'column'}>
              <Text mt={5} fontSize={'13'} fontWeight={'extrabold'}>
               Sales by Time of Day <span color="#6B6B6B">(Last 24 Hours)</span>
              </Text>
            </Flex>
             <DoughnutDetails/>
            </CardBody>
        </Card>
    </Stack>
  )
}

export default CustomProduct