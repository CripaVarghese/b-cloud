import { Button, HStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { navbar } from "../constants/navbar";

const Navbar = () => {
  return (
    <HStack
      justifyContent={"space-between"}
      ml={"50px"}
      mr={"100px"}
      height={"12"}
      gap={{ md: "0" }}
      overflow={"auto"}
    >
      {navbar.map((navbarItem, i) => (
        <Link to={navbarItem.href} key={i}>
          <HStack>
            <Button
              leftIcon={<navbarItem.svg />}
              variant="ghost"
              fontSize={"11"}
              fontWeight={500}
              size="xs"
              borderRadius="15"
              p="13px 12px"
              _hover={{ backgroundColor: "#E4F1FF", borderRadius: "15" }}
              cursor={"pointer"}
              _active={{
                bg: "#E4F1FF",
                borderColor: "#E4F1FF",
              }}
              _focus={{
                bg: "#E4F1FF",
              }}
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
