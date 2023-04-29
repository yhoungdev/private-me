import { Box, Flex, Text, Avatar } from "@chakra-ui/react";
import ContainerLayout from "../../Layouts/ContainerLayout";
const Header = () => {
  return (
    <>
      <ContainerLayout>
        <Box>
          <Flex
            my={"1em"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Box>
              <Text fontFamily={"var(--font-comic)"}> Private.Me</Text>
              <Box py={"0.3em"} w={"1em"} bg={"var(--pm-btn-green)"}></Box>
            </Box>

            <Box>
              <Avatar />
            </Box>
          </Flex>
        </Box>
      </ContainerLayout>
    </>
  );
};

export default Header;
