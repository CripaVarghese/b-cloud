import StatusDetails from "./StatusDetails"
import { Stack} from "@chakra-ui/react"
import CustomProduct from "./CustomProduct"
import SelectGraph from "./SelectGraph"
import Chart from "./Chart"

const Details = () => {
  return (
    <Stack w={{ base: '80%',md:'',lg:'74.5%' }}>
      <StatusDetails />
      <Stack flexDirection={'row'} mt={5}>
          <CustomProduct />
          <Stack>
            <SelectGraph />
            <Chart color="#0063FF" />
          </Stack>
      </Stack>
      <Chart color="#00CD4D" />
    </Stack>
  )
}

export default Details