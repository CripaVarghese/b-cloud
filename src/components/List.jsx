import { Box, HStack, Stack } from "@chakra-ui/react";
import buttonList from "../dataLists/buttonList";

const List = () => {
  return (
    <Stack
      justifyContent={"space-between"}
      w={"100%"}
      h={{ base: "80%", md: "70%", lg: "245", "2xl": "300" }}
    >
      {buttonList.map((list, i) => (
        <HStack
          key={i}
          border={"1px solid #0063FF"}
          borderRadius={5}
          p={"11px 15px"}
          color="#0063FF"
          _hover={{ bg: "#0063FF", color: "white" }}
          cursor={"pointer"}
        >
          <list.svg />
          <Box
            key={i}
            href={list.href ?? "#"}
            fontSize={"11"}
            fontWeight={"extrabold"}
          >
            {list.title}
          </Box>
        </HStack>
      ))}
    </Stack>
  );
};

export default List;
