import { Stack, Text } from "@chakra-ui/react";
import { style } from "../styles";
import SelectDuration from "./SelectDuration";

const InsightsHeader = () => {
  return (
    <Stack
      w="100%"
      flexDirection={{ base: "column", lg: "row" }}
      alignItems={{ base: "flex-start", lg: "center" }}
      mt="12px"
      gap="24px"
    >
      <Text color={"#0063FF"} {...style.lgFontStyles} letterSpacing={".5px"}>
        Custom Product Insights
      </Text>
      <SelectDuration />
    </Stack>
  );
};

export default InsightsHeader;
