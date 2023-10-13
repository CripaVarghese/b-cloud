import Sidebar from "./Sidebar"
import { Stack, Text} from "@chakra-ui/react"
import Details from "./Details"
import {productDetailsStyles as style} from "../styles"

const Hero = () => {
  return (
    <Stack alignItems={{base:'center', md:'flex-start'}} h={'100%'}>
      <Text my={'6px'} color={'#0063FF'} {...style.lgFontStyles}>Product details</Text>
      <Stack w={{ base:'', md:'', lg:'', '2xl':'100%'}} h={{ base:'', md:'', lg:'', '2xl':'' }} flexDirection={{ base:'column', md:'row', lg:'row'}} justifyContent={{ lg:'space-between'}} alignItems={{base:'center', md:'flex-start'}}>
          <Sidebar />
          <Details />
      </Stack>
    </Stack>
  )
}

export default Hero