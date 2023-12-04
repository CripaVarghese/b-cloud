import { HStack, Text, Image } from "@chakra-ui/react";
import CloudLogo from "../assets/CloudLogo";
import Cantaloupe from "../assets/Cantaloupe";
import Settings from "../assets/Settings";

const Header = () => {
  return (
    <HStack
      justifyContent={"space-between"}
      p={{ base: "0 10px", md: "0 55px", lg: "0 55px" }}
      w="100vw"
      height={16}
    >
      <CloudLogo />
      <Cantaloupe />
      <HStack>
        <Image src="/images/ProfilePhoto.png" boxSize={"5"} />
        <Text
          color="#0063FF"
          fontSize={"xs"}
          fontWeight={"bold"}
          p={{ base: "0", md: "0", lg: "0 5px" }}
        >
          John Doe
        </Text>
        <Settings />
      </HStack>
    </HStack>
  );
};

export default Header;
