import { Select, Stack } from "@chakra-ui/react";

const SelectDuration = () => {
  return (
    <Select
      placeholder="Last 24 Hours"
      w={{
        base: "38%",
        sm: "20%",
        md: "29%",
        lg: "18%",
        xl: "12%",
        "2xl": "8%",
      }}
      h={"25"}
      fontSize={"10"}
      fontWeight={"medium"}
      position={"relative"}
      iconColor={"#0063FF"}
      iconSize="15px"
    >
      <Stack position={"absolute"}>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </Stack>
    </Select>
  );
};

export default SelectDuration;
