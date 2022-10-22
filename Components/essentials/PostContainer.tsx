import { Box, Text, Avatar } from "@chakra-ui/react";
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
        bg={"var(--dark-shade)"}
        my={"1em"}
        borderRadius={"0.5em"}
        fontFamily={"var(--font-commic)"}
      >
        <Box display={"flex"} alignItems={"center"} gap={"1em"}>
          <Avatar />
          <Box>
            <Text>Username</Text>
            <Text fontSize={"0.8em"}>14th OCtober, 2022</Text>
          </Box>
        </Box>

        <Box my={"1em"}>
          <Text my={"0.5em"}>
            Edward Joseph Snowden (born June 21, 1983) is an American former
            computer intelligence
          </Text>
        </Box>

        <Box my={"1em"} borderBottom={"1px solid gray"} pb={"1em"}>
          <Box display={"flex"} gap={"0.5em"} alignItems={"center"}>
            <AiOutlineComment size={"1.2em"} />
            <Text>100</Text>
          </Box>
        </Box>
        {/* post container component */}
        <Box display={item}>
          <PostComment />
        </Box>
      </Box>
    </>
  );
};

export default PostContainer;
