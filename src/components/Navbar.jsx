import { Box, HStack, IconButton } from "@chakra-ui/react";
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
          <HStack
            gap={{ lg: "0" }}
            pr={{ sm: "0", md: "5", lg: "15px" }}
            py={{ sm: "0", md: "1", lg: "2" }}
            _hover={{ backgroundColor: "#E4F1FF", borderRadius: "15" }}
            cursor={"pointer"}
          >
            <IconButton variant="link" icon={<navbarItem.svg />} />
            <Box fontSize={"11"} fontWeight={500}>
              {navbarItem.title}
            </Box>
          </HStack>
        </Link>
      ))}
    </HStack>
  );
};

export default Navbar;
