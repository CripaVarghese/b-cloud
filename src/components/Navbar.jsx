import { Box, HStack, IconButton } from "@chakra-ui/react";
import navbarContents from "../dataLists/navbarContents";
// import { useNavigate } from "react-router-dom";
// import { URL_PATHS } from "../constants/routes";

const Navbar = () => {
  // const navigate = useNavigate();
  return (
    <HStack
      justifyContent={"space-between"}
      ml={"50px"}
      mr={"100px"}
      height={"12"}
      gap={{ md: "0" }}
      overflow={"auto"}
    >
      {navbarContents.map((navbarContent, i) => (
        <HStack
          key={i}
          gap={{ lg: "0" }}
          pr={{ sm: "0", md: "5", lg: "15px" }}
          py={{ sm: "0", md: "1", lg: "2" }}
          _hover={{ backgroundColor: "#E4F1FF", borderRadius: "15" }}
          // onClick={() => navigate(URL_PATHS.DASHBOARD)}
          cursor={"pointer"}
        >
          <IconButton variant="link" icon={<navbarContent.svg />} />
          <Box
            key={i}
            href={navbarContent.href ?? "#"}
            fontSize={"11"}
            fontWeight={500}
          >
            {navbarContent.title}
          </Box>
          {/* </Button> */}
        </HStack>
      ))}
    </HStack>
  );
};

export default Navbar;
