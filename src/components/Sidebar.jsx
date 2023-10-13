import { Card , CardBody, Text, Stack, Box,Image } from "@chakra-ui/react"
import List from "./List"
import { productDetailsStyles as styles } from "../styles"

const Sidebar = () => {
  return (
    <Card w={{ base:'80%', md:'70%', lg:'24%'}} h={{ base:'552', md:'552', lg:'552' , '2xl': '675'}} boxShadow={'rgba(149, 157, 165, 0.2) 0px 8px 24px'}>
      <CardBody p='7'>
          <Stack>
            <Image src="/images/Dairymilk.png" />
            <Stack gap={0} mb={'3'}>
                <Text fontSize={'lg'} fontWeight={'extrabold'}>Dairy Milk</Text>
                <Text {...styles.textStyles}>Chocolates</Text>
            </Stack>
          </Stack>
          <Box>
            <List />
          </Box>
      </CardBody>
    </Card>
  )
}

export default Sidebar