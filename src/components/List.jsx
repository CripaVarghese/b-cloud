import { Button, HStack, Stack, Text } from "@chakra-ui/react";
import buttonList from "../dataLists/buttonList";
import { useNavigate } from "react-router-dom";
import { style } from "../styles";
import { useState } from "react";

const List = () => {
  const navigate = useNavigate();
  const [activeButton, setActiveButton] = useState(null);

  const handleClick = (id) => {
    setActiveButton(id);
  };
  return (
    <Stack justifyContent={"space-between"} h="100%" gap="3">
      {buttonList.map((list, index) => (
        <HStack
          key={index}
          style={{
            backgroundColor:
              activeButton === index ? style.themeColor.bg : "transparent",
          }}
          w="100%"
          justifyContent={"flex-start"}
          cursor={"pointer"}
          border={".5px solid #7FB2FF"}
          borderRadius={5}
          gap="0"
          onClick={() => {
            handleClick(index);
            navigate(`/products/${list.href}`);
          }}
          className="sidebar-button"
        >
          <Button variant={"ghost"} _hover={{ variant: "ghost" }}>
            <list.svg
              className="icon"
              color={activeButton === index ? "white" : style.themeColor.bg}
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
              color: activeButton === index ? "white" : style.themeColor.color,
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
