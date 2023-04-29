import { Avatar, Box } from "@chakra-ui/react";
import InterfaceButton from "../main/Button";
import DefaultInput from "../main/DefaultInput";

const UserCommentBox = () => {
  return (
    <>
      <Box display={"flex"} gap={"1.5em"} alignItems={"center"}>
        <Avatar />

        <DefaultInput bg="gray.700" placeholder="Your comment" />

        <InterfaceButton bg={"var(--pm-btn-green)"}>Add</InterfaceButton>
      </Box>
    </>
  );
};

export default UserCommentBox;
