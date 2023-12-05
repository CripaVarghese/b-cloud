import { Button, HStack, Stack } from "@chakra-ui/react";
import buttonList from "../dataLists/buttonList";

const List = () => {
  return (
    <Stack
      justifyContent={"space-between"}
      w={"100%"}
      h="100%"
      gap="3"
      // h={{ base: "80%", md: "70%", lg: "245", "2xl": "300" }}
    >
      {buttonList.map((list, i) => (
        <HStack key={i}>
          <Button
            w="100%"
            justifyContent={"flex-start"}
            p={"12px 15px"}
            _hover={{ bg: "#0363FE", color: "white" }}
            color="#0363FE"
            variant="ghost"
            cursor={"pointer"}
            fontSize={"11"}
            fontWeight={"extrabold"}
            border={".5px solid #0363FE"}
            borderRadius={5}
            href={list.href ?? "#"}
            leftIcon={<list.svg />}
          >
            {list.title}
          </Button>
          {/* <list.svg />
          <Box
            key={i}
            href={list.href ?? "#"}
            fontSize={"11"}
            fontWeight={"extrabold"}
          >
            {list.title}
          </Box> */}
        </HStack>
      ))}
    </Stack>
  );
};

export default List;
