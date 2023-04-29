import { Box, Text, Avatar, Flex } from "@chakra-ui/react";
import PostComment from "../major/PostComment";
import { AiOutlineComment } from "react-icons/ai";
import { useState } from "react";

interface Props {
  item?: string;
}
const PostContainer = ({ item }: Props) => {
  //@ts-ignore
  const [data, setData] = useState();

  return (
    <>
      <Box
        p={"1.6em"}
        bg={"var(--pm-dark-shade)"}
        my={"1em"}
        borderRadius={"1em"}
        fontFamily={"var(--font-commic)"}
      >
        <Flex justifyContent={"space-between"} alignItems={"center"}>
          <Box display={"flex"} alignItems={"center"} gap={"1em"}>
            <Avatar />
            <Box>
              <Text>Username</Text>
              <Text fontSize={"0.8em"}> </Text>
            </Box>
          </Box>

          <Box>02/05/2023</Box>
        </Flex>

        <Box my={"1em"} px={["1em", "2em"]}>
          <Text my={"0.5em"} fontSize={"16px"}>
            Edward Joseph Snowden (born June 21, 1983) is an American former
            computer intelligence
          </Text>

          <Flex gap={"0.5em"} my={"1em"}>
            <AiOutlineComment size={"1.3em"} />
            <Text>399k</Text>
          </Flex>
        </Box>
      </Box>
    </>
  );
};

export default PostContainer;
