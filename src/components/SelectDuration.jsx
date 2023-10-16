import { Select } from "@chakra-ui/react"

const dataOption1 = [
  {name: '06:00', value: 40},
  {name: '07:00', value: 28},
  {name: '08:00', value: 32},
  {name: '09:00', value: 12},
  {name: '10:00', value: 18},
  {name: '11:00', value: 20},
  {name: '12:00', value: 35},
  {name: '13:00', value: 4},
  {name: '14:00', value: 15},
  {name: '15:00', value: 11},
  {name: '16:00', value: 15},
  {name: '17:00', value: 28}
];

const dataOption2= [
  {name: '06:00', value: 40},
  {name: '07:00', value: 28},
  {name: '08:00', value: 32},
  {name: '09:00', value: 12},
  {name: '10:00', value: 18},
  {name: '11:00', value: 20},
  {name: '12:00', value: 35},
  {name: '13:00', value: 4},
  {name: '14:00', value: 15},
  {name: '15:00', value: 11},
  {name: '16:00', value: 15},
  {name: '17:00', value: 28}
];

const dataOption3= [
  {name: '06:00', value: 40},
  {name: '07:00', value: 28},
  {name: '08:00', value: 32},
  {name: '09:00', value: 12},
  {name: '10:00', value: 18},
  {name: '11:00', value: 20},
  {name: '12:00', value: 35},
  {name: '13:00', value: 4},
  {name: '14:00', value: 15},
  {name: '15:00', value: 11},
  {name: '16:00', value: 15},
  {name: '17:00', value: 28}
];

const SelectDuration = () => {
  return (
    <Select placeholder='Last 24 Hours' w={{ base:'50%', md:'',lg:'22%'}} h={'25'} fontSize={'10'} fontWeight={'extrabold'}>
      <option value='option1'>Option 1</option>
     <option value='option2'>Option 2</option>
     <option value='option3'>Option 3</option>
    </Select>

  )
}

export default SelectDuration