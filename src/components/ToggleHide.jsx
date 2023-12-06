import { Stack, Image, Box, Button, HStack } from "@chakra-ui/react";
import buttonList from "../dataLists/buttonList";

const ToggleHide = () => {
  return (
    <Stack gap={{ lg: "0", xl: "10", "2xl": "20" }}>
      <Stack h="100px" alignItems={"center"}>
        <Image src="/images/Dairymilk.png" />
      </Stack>

      <Box>
        <Stack justifyContent={"space-between"} h="100%" gap="3">
          {buttonList.map((list, i) => (
            <HStack
              key={i}
              // w="100%"
              justifyContent={"center"}
              _hover={{ bg: "#0363FE", color: "white" }}
              cursor={"pointer"}
              border={".5px solid #7FB2FF"}
              borderRadius={5}
              href={list.href ?? "#"}
            >
              <Button variant={"ghost"} _hover={{ variant: "ghost" }}>
                <list.svg className="icon" />
              </Button>
            </HStack>
          ))}
        </Stack>
      </Box>
    </Stack>
  );
};

export default ToggleHide;