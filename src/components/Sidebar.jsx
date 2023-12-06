import { Card, CardBody, Stack, Button } from "@chakra-ui/react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import { useState } from "react";
import ToggleDisplay from "./ToggleDisplay";
import ToggleHide from "./ToggleHide";

const Sidebar = () => {
  const [toggle, setToggle] = useState(false);
  const handleClick = () => {
    setToggle((previousClick) => {
      return !previousClick;
    });
  };
  return (
    <Card
      w={{ base: "80%", md: "40%", lg: "24%", xl: "24%" }}
      boxShadow={"rgba(149, 157, 165, 0.2) 0px 10px 24px"}
      py="3px"
    >
      <CardBody p="6">
        <Stack justifyContent={"space-between"}>
          {/* gap={3} */}
          {toggle ? (
            <>
              <Button
                border="2px solid"
                color="transparent"
                variant={"ghost"}
                _hover={{ variant: "ghost" }}
              >
                <FaArrowRight color={"#0363FE"} onClick={() => handleClick()} />
              </Button>
              <ToggleHide />
            </>
          ) : (
            <>
              <Button
                w={{
                  base: "70%",
                  md: "85%",
                  lg: "75%",
                  xl: "50%",
                  "2xl": "30%",
                }}
                variant={"ghost"}
                border="2px solid"
                color={"#0363FE"}
                leftIcon={<FaArrowLeft />}
                onClick={() => handleClick()}
              >
                Hide Sidebar
              </Button>
              <ToggleDisplay toggle={toggle} setToggle={setToggle} />
            </>
          )}
        </Stack>
      </CardBody>
    </Card>
  );
};

export default Sidebar;
