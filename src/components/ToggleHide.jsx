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
        <Stack justifyContent={"space-between"} h="100%" gap="3">
          {buttonList.map((list, i) => (
            <HStack
              key={i}
              justifyContent={"center"}
              _hover={{ bg: style.themeColor.bg, color: "white" }}
              cursor={"pointer"}
              border={".5px solid #7FB2FF"}
              borderRadius={5}
              _active={{ bg: style.themeColor.bg, color: "white" }}
              onClick={() => {
                navigate(`/products/${list.href}`);
              }}
            >
              <Button
                variant={"ghost"}
                _hover={{ variant: "ghost", color: "white" }}
                w="full"
                className="icon"
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
