import { Avatar, Box } from "@chakra-ui/react";

import DefaultInput from "../main/DefaultInput";
import { BiImage } from "react-icons/bi";
import Link from "next/link";

const CreatePostPanel = () => {
  return (
    <>
      <Link href={"/main/post"}>
        <Box display={"flex"} gap={"1.5em"} alignItems={"center"} mb={"3em"}>
          <Avatar mt={"0.5em"} />

          <DefaultInput bg="gray.700" placeholder="Your comment" />

          <Box
            as="button"
            bg={"gray.700"}
            w={"fit-content"}
            mt={"0.5em"}
            p={"0.8em"}
            borderRadius={"0.3em"}
          >
            <BiImage size={"1.5em"} />
          </Box>
        </Box>
      </Link>
    </>
  );
};

export default CreatePostPanel;
