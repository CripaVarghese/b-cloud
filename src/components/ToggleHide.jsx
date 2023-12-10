import { Stack, Image, Box, Button, HStack } from "@chakra-ui/react";
import buttonList from "../dataLists/buttonList";
import { useNavigate } from "react-router-dom";
import { style } from "../styles";
import { useState } from "react";

const ToggleHide = () => {
  const navigate = useNavigate();
  const [activeButton, setActiveButton] = useState(null);

  const handleClick = (id) => {
    setActiveButton(id);
  };
  return (
    <Stack gap={{ lg: "0", xl: "10", "2xl": "20" }}>
      <Stack h="100px" alignItems={"center"}>
        <Image src="/images/Dairymilk.png" />
      </Stack>

      <Box>
        <Stack
          justifyContent={"space-between"}
          h="100%"
          gap="3"
          alignItems={"center"}
        >
          {buttonList.map((list, index) => (
            <HStack
              key={index}
              style={{
                backgroundColor:
                  activeButton === index ? style.themeColor.bg : "transparent",
              }}
              w="70px"
              borderRadius="7px"
              cursor={"pointer"}
              border={".5px solid #7FB2FF"}
              onClick={() => {
                handleClick(index);
                navigate(`/products/${list.href}`);
              }}
              justifyContent={"space-around"}
              className="sidebar-button"
            >
              <Button
                variant={"ghost"}
                _hover={{ variant: "ghost" }}
                w="full"
                h="30px"
              >
                <list.svg
                  className="icon"
                  color={activeButton === index ? "white" : style.themeColor.bg}
                />
              </Button>
            </HStack>
          ))}
        </Stack>
      </Box>
    </Stack>
  );
};

export default ToggleHide;
