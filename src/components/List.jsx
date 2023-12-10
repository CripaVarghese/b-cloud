import { Button, HStack, Stack, Text } from "@chakra-ui/react";
import buttonList from "../dataLists/buttonList";
import { useNavigate } from "react-router-dom";
import { style } from "../styles";

const List = () => {
  const navigate = useNavigate();
  return (
    <Stack justifyContent={"space-between"} h="100%" gap="3">
      {buttonList.map((list, i) => (
        <HStack
          key={i}
          w="100%"
          justifyContent={"flex-start"}
          _hover={{ bg: style.themeColor.bg, color: "white" }}
          cursor={"pointer"}
          border={".5px solid #7FB2FF"}
          borderRadius={5}
          gap="0"
          _active={{ bg: style.themeColor.bg, color: "white" }}
          onClick={() => {
            navigate(`/products/${list.href}`);
          }}
          className="sidebar-button"
        >
          <Button variant={"ghost"} _hover={{ variant: "ghost" }}>
            <list.svg className="icon" color={style.themeColor.color} />
          </Button>
          <Text
            w="full"
            h="full"
            py="12px"
            variant="ghost"
            fontSize={"11"}
            fontWeight={"semibold"}
            color={style.themeColor.color}
            className="text-button"
          >
            {list.title}
          </Text>
        </HStack>
      ))}
    </Stack>
  );
};

export default List;
