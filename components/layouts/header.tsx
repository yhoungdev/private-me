import { Box, Flex } from "@chakra-ui/react";
import ButtonInterface from "../essentials/button";
import Logo from "../assets/logo";

const Header = () => {
  return (
    <Flex py={"2em"} justifyContent={"space-between"}>
      <Box>
        <Logo />
      </Box>
      <ButtonInterface>Get Started</ButtonInterface>
    </Flex>
  );
};
export default Header;
