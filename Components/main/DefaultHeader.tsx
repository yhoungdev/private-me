import { Box, Flex, Text, Icon } from "@chakra-ui/react";
import ContainerLayout from "../../Layouts/ContainerLayout";
import { FaGithub } from "react-icons/fa";
const DefaultHeader = () => {
  return (
    <>
      <ContainerLayout>
        <Flex justifyContent={"start"} alignItems={"Center"}>
          {/* Adding the  github Icon here */}
          <Box>
            <Icon as={FaGithub} w={8} h={8} />
          </Box>
          <Flex justifyContent={"space-between"} my={"1em"} width={"full"}>
            <Box>
              <Text fontFamily={"var(--font-comic)"}> Private.Me</Text>
              <Box py={"0.3em"} w={"1em"} bg={"var(--primary-green)"}></Box>
            </Box>

            <Box>{/* Join Network */}</Box>
          </Flex>
        </Flex>
      </ContainerLayout>
    </>
  );
};

export default DefaultHeader;
