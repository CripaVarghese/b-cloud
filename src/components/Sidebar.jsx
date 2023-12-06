import { Card, CardBody, Stack, Button } from "@chakra-ui/react";
import { FaArrowLeft, FaArrowRight } from "react-icons/Fa";

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
      w={{ base: "80%", md: "30%", lg: "24%" }}
      h={{ "2xl": "55%" }}
      boxShadow={"rgba(149, 157, 165, 0.2) 0px 10px 24px"}
      py="3px"
    >
      <CardBody p="6">
        <Stack justifyContent={"space-between"} gap={3}>
          {toggle ? (
            <>
              <Button variant={"ghost"} _hover={{ variant: "ghost" }}>
                <FaArrowRight color={"#0363FE"} onClick={() => handleClick()} />
              </Button>
              <ToggleHide />
            </>
          ) : (
            <>
              <Button
                w="50%"
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
