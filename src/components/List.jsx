import { Button, HStack, Stack, Text } from "@chakra-ui/react";
import buttonList from "../dataLists/buttonList";
// import { useNavigate } from "react-router-dom";

const List = () => {
  // const navigate = useNavigate();
  return (
    <Stack justifyContent={"space-between"} h="100%" gap="3">
      {buttonList.map((list, i) => (
        <HStack
          key={i}
          w="100%"
          justifyContent={"flex-start"}
          _hover={{ bg: "#0363FE", color: "white" }}
          cursor={"pointer"}
          border={".5px solid #7FB2FF"}
          borderRadius={5}
          gap="0"
          // onClick={() => {
          //   navigate(list.href);
          // }}
        >
          <Button
            variant={"ghost"}
            _hover={{ variant: "ghost" }}
            className="icon"
          >
            <list.svg className="icon" color="#0363FE" />
          </Button>
          <Text
            w="full"
            h="full"
            py="12px"
            variant="ghost"
            fontSize={"11"}
            fontWeight={"semibold"}
            color="#0363FE"
            _hover={{ color: "white" }}
          >
            {list.title}
          </Text>
        </HStack>
      ))}
    </Stack>
  );
};

export default List;
