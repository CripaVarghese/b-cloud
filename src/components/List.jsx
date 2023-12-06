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
            p={{ md: "20px 15px", lg: "20px 25px" }}
            _hover={{ bg: "#0363FE", color: "white" }}
            color="#0363FE"
            variant="ghost"
            cursor={"pointer"}
            fontSize={"11"}
            fontWeight={"semibold"}
            border={".5px solid #7FB2FF"}
            borderRadius={5}
            href={list.href ?? "#"}
            leftIcon={<list.svg />}
          >
            {list.title}
          </Button>
        </HStack>
      ))}
    </Stack>
  );
};

export default List;
