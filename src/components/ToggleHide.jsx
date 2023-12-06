import { Stack, Image, Box, Button, HStack } from "@chakra-ui/react";
import buttonList from "../dataLists/buttonList";

const ToggleHide = (props) => {
  const { toggle, setToggle } = props;

  return (
    <>
      <Stack h="50px">
        <Image w="100px" src="/images/Dairymilk.png" />
      </Stack>

      <Box>
        <Stack
          justifyContent={"space-between"}
          // w={"100%"}
          h="100%"
          gap="3"
          // h={{ base: "80%", md: "70%", lg: "245", "2xl": "300" }}
        >
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
    </>
  );
};

export default ToggleHide;
