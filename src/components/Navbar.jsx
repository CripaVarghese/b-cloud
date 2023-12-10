import { Button, HStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import navbar from "../dataLists/navbar";
import { useState } from "react";

const Navbar = () => {
  const [activeButton, setActiveButton] = useState(null);

  const handleClick = (id) => {
    setActiveButton(id);
  };
  return (
    <HStack
      justifyContent={"space-between"}
      ml={"50px"}
      mr={"100px"}
      height={"12"}
      gap={{ md: "0" }}
      overflow={"auto"}
    >
      {navbar.map((navbarItem, index) => (
        <Link to={navbarItem.href} key={index}>
          <HStack>
            <Button
              style={{
                backgroundColor:
                  activeButton === index ? "#E4F1FF" : "transparent",
              }}
              onClick={() => handleClick(index)}
              leftIcon={<navbarItem.svg />}
              variant="ghost"
              fontSize={"11"}
              fontWeight={500}
              size="xs"
              borderRadius="15"
              p="13px 12px"
              cursor={"pointer"}
            >
              {navbarItem.title}
            </Button>
          </HStack>
        </Link>
      ))}
    </HStack>
  );
};

export default Navbar;
