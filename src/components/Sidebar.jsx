import { Card , CardBody, Text, Stack, Box,Image } from "@chakra-ui/react"
import List from "./List"
import { productDetailsStyles as styles } from "../styles"

const Sidebar = () => {
  return (
    <Card w={{ base:'80%', md:'40%', lg:'24%','2xl':'20%'}} h={{ base:'', md:'', lg:'' , '2xl': '630'}}  boxShadow={'rgba(149, 157, 165, 0.2) 0px 8px 24px'}>
      {/* h={{ base:'552', md:'552', lg:'59%' , '2xl': '675'}} */}
      <CardBody  p='6' >
        <Stack h={{ base:'', md:'', lg:'' , '2xl': '100%'}} justifyContent={'space-between'}>
          <Stack>
            <Image src="/images/Dairymilk.png" />
            <Stack gap={0} mb={'4'}>
                <Text fontSize={'lg'} fontWeight={'extrabold'}>Dairy Milk</Text>
                <Text {...styles.textStyles}>Chocolates</Text>
            </Stack>
          </Stack>

          <Box>
            <List />
          </Box>

        </Stack>

      </CardBody>
    </Card>
  )
}

export default Sidebar