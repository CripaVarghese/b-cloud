import { Button, HStack, Stack, Text } from "@chakra-ui/react";
import buttonList from "../dataLists/buttonList";
import { useNavigate } from "react-router-dom";
import { style } from "../styles";
import { useState } from "react";

const List = () => {
  const navigate = useNavigate();
  const [activeButton, setActiveButton] = useState("Dashboard");

  const handleClick = (id) => {
    setActiveButton(id);
  };
  return (
    <Stack justifyContent={"space-between"} h="100%" gap="3">
      {buttonList.map((list) => (
        <HStack
          key={list.title}
          style={{
            backgroundColor:
              activeButton === list.title ? style.themeColor.bg : "transparent",
          }}
          w="100%"
          justifyContent={"flex-start"}
          cursor={"pointer"}
          border={".5px solid #7FB2FF"}
          borderRadius={5}
          gap="0"
          onClick={() => {
            handleClick(list.title);
            navigate(`/products/${list.href}`);
          }}
          className="sidebar-button"
        >
          <Button variant={"ghost"} _hover={{ variant: "ghost" }}>
            <list.svg
              className="icon"
              color={
                activeButton === list.title ? "white" : style.themeColor.bg
              }
            />
          </Button>
          <Text
            w="full"
            h="full"
            py="12px"
            variant="ghost"
            fontSize={"11"}
            fontWeight={"semibold"}
            style={{
              color:
                activeButton === list.title ? "white" : style.themeColor.color,
            }}
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
