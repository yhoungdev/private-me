import { Box, Flex, Avatar } from "@chakra-ui/react";
import ContainerLayout from "../../Layouts/ContainerLayout";
import PostContainer from "../../Components/essentials/PostContainer";

const UserProfile = () => {
  return (
    <>
      <Box
        bg={"var(--pm-profile-green)"}
        position={"relative"}
        w={"100vw"}
        p={"2em"}
        h={["20vh", "40vh"]}
      ></Box>

      <ContainerLayout>
        <Box
          bg={"var(--background)"}
          py={"2em"}
          px={["2em", "3em"]}
          position={"relative"}
          top={["-4em", "-9em"]}
          borderRadius={"0.5em"}
        >
          <Flex>
            <Avatar size={["lg", "xl"]} />

            <Box></Box>
          </Flex>

          <Box my={"1.5em"}>lorem ipsunm</Box>

          <PostContainer />
        </Box>
      </ContainerLayout>
    </>
  );
};

export default UserProfile;
