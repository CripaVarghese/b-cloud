import { Select } from "@chakra-ui/react"

const SelectGraph = () => {
  return (
    <Select placeholder='Last 24 Hours' w={'22%'} h={'25'} fontSize={'10'} fontWeight={'extrabold'}>
      <option value='option1'>Option 1</option>
     <option value='option2'>Option 2</option>
     <option value='option3'>Option 3</option>
    </Select>

  )
}

export default SelectGraph