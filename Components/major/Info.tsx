import ContainerLayout from "../../Layouts/ContainerLayout";
import { Text, Box, Flex, Avatar } from "@chakra-ui/react";

const Info = () => {
  return (
    <>
      <ContainerLayout>
        <Box>
          <Text
            fontWeight={"bold"}
            fontSize={["50px", "80px"]}
            fontFamily={"var(--font-outfit)"}
            textAlign={"center"}
            w={["", "580px"]}
            lineHeight={["", "97px"]}
            mx={"auto"}
          >
            Privacy is{" "}
            <span style={{ color: "var(--pm-btn-green)" }}>Human Right</span>
          </Text>
        </Box>

        <Box
          bg={"var(--pm-dark-shade)"}
          p={"2em"}
          mx={"auto"}
          my={"3em"}
          borderRadius={"0.5em"}
          w={["100%", "60%"]}
        >
          <Flex gap={"4"} my={"2em"} flexDir={["row"]} alignItems={"center"}>
            <Avatar src="https://raw.githubusercontent.com/petejkim/ethereum-blockies-png/HEAD/sample.png" />

            <Box>
              <Text overflowWrap={"anywhere"} my={"0.5em"} color={"#CBCBCB"}>
                {" "}
                0x456061F47628bA970A97394DeC87a1685A996A58{" "}
              </Text>
              <Text color={"#9B9B9B !important"}> 20 Sep. 2022 </Text>
            </Box>
          </Flex>

          <Text color={"#9B9B9B !important"}>
            Privacy should be Number 1 Human Right, in this World of illusion
            called the internet, there is nothing like privacy and security
            dosnt exist in the internet
          </Text>
        </Box>
      </ContainerLayout>
    </>
  );
};

export default Info;
