import { Stack, Image, Box, Button, HStack } from "@chakra-ui/react";
import buttonList from "../dataLists/buttonList";
import { useNavigate } from "react-router-dom";
import { style } from "../styles";

const ToggleHide = () => {
  const navigate = useNavigate();
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
          {buttonList.map((list, i) => (
            <HStack
              w="70px"
              borderRadius="7px"
              key={i}
              cursor={"pointer"}
              border={".5px solid #7FB2FF"}
              _active={{ bg: style.themeColor.bg, color: "white" }}
              onClick={() => {
                navigate(`/products/${list.href}`);
              }}
              justifyContent={"space-around"}
              className="sidebar-button"
            >
              <Button
                variant={"ghost"}
                _hover={{
                  variant: "ghost",
                  bg: style.themeColor.bg,
                  color: "white",
                }}
                w="full"
                h="30px"
              >
                <list.svg className="icon" color={style.themeColor.color} />
              </Button>
            </HStack>
          ))}
        </Stack>
      </Box>
    </Stack>
  );
};

export default ToggleHide;
