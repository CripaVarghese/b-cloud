import { Button, HStack, Stack } from "@chakra-ui/react";
import buttonList from "../dataLists/buttonList";

const List = (props) => {
  // eslint-disable-next-line react/prop-types
  const { toggle } = props;
  return (
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
          w="100%"
          justifyContent={"flex-start"}
          _hover={{ bg: "#0363FE", color: "white" }}
          cursor={"pointer"}
          border={".5px solid #7FB2FF"}
          borderRadius={5}
          href={list.href ?? "#"}
        >
          <Button variant={"ghost"} _hover={{ variant: "ghost" }}>
            <list.svg className="icon" />
          </Button>
          {!toggle ? (
            <Button
              px="0px"
              variant="ghost"
              fontSize={"11"}
              fontWeight={"semibold"}
              color="#0363FE"
              _hover={{ color: "white" }}
            >
              {list.title}
            </Button>
          ) : (
            ""
          )}
        </HStack>
      ))}
    </Stack>
  );
};

export default List;
