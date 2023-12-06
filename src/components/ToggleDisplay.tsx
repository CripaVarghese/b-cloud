import React from "react";
import { Text, Stack, Box, Image, Button } from "@chakra-ui/react";
import List from "./List";

const ToggleDisplay = (props) => {
  const { toggle, setToggle } = props;
  return (
    <Stack>
      <Stack>
        <Image src="/images/Dairymilk.png" />
        <Stack gap={0}>
          <Text fontSize={"lg"} fontWeight={"bold"}>
            Dairy Milk
          </Text>
          <Text fontSize={"xs"}>Chocolates</Text>
        </Stack>
      </Stack>

      <Box>
        <List toggle={toggle} setToggle={setToggle} />
      </Box>
    </Stack>
  );
};

export default ToggleDisplay;
