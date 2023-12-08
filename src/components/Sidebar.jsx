import { Card, CardBody, Stack, Button } from "@chakra-ui/react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useState } from "react";
import ToggleDisplay from "./ToggleDisplay";
import ToggleHide from "./ToggleHide";
import { style } from "../styles";

const Sidebar = () => {
  const [isExpanded, setExpanded] = useState(true);
  const handleClick = () => {
    setExpanded((previousClick) => {
      return !previousClick;
    });
  };
  const expandedCardWidth = {
    base: "80%",
    md: "40%",
    lg: "25%",
    xl: "24%",
  };
  const collapsedCardWidth = {
    base: "40%",
    md: "30%",
    lg: "14%",
    xl: "14%",
  };
  return (
    <Card
      w={isExpanded ? expandedCardWidth : collapsedCardWidth}
      boxShadow={"rgba(149, 157, 165, 0.2) 0px 10px 24px"}
      py="3px"
    >
      <CardBody p="6">
        <Stack justifyContent={"space-between"}>
          {isExpanded ? (
            <>
              <Button
                w={{
                  base: "70%",
                  sm: "20%",
                  md: "65%",
                  lg: "75%",
                  xl: "50%",
                  "2xl": "30%",
                }}
                variant={"ghost"}
                border="2px solid"
                color={style.themeColor.color}
                leftIcon={<FaArrowLeft />}
                onClick={() => handleClick()}
              >
                Hide Sidebar
              </Button>
              <ToggleDisplay toggle={isExpanded} setToggle={setExpanded} />
            </>
          ) : (
            <>
              <Button
                border="2px solid"
                color="transparent"
                variant={"ghost"}
                _hover={{ variant: "ghost" }}
              >
                <FaArrowRight
                  color={style.themeColor.color}
                  onClick={() => handleClick()}
                />
              </Button>
              <ToggleHide />
            </>
          )}
        </Stack>
      </CardBody>
    </Card>
  );
};

export default Sidebar;
