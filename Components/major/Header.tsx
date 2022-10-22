import {
  Box,
  Flex,
  Text,
  Avatar,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  PopoverArrow,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import ContainerLayout from "../../Layouts/ContainerLayout";

const Header = () => {
  const [address, setAddress] = useState();
  useEffect(() => {
    if (typeof window !== "undefined") {
      const data = localStorage.getItem("address");
      // @ts-ignore
      setAddress(data);
    }
  }, []);
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
              <Box py={"0.3em"} w={"1em"} bg={"var(--primary-green)"}></Box>
            </Box>
            <Box>
              <Popover>
                <PopoverTrigger>
                  <Avatar as="button" />
                </PopoverTrigger>
                <PopoverContent bg={"var(--dark-shade)"} textAlign={"center"}>
                  <PopoverArrow bg={"var(--dark-shade)"} />
                  <PopoverBody>{address}</PopoverBody>
                </PopoverContent>
              </Popover>
            </Box>
          </Flex>
        </Box>
      </ContainerLayout>
    </>
  );
};

export default Header;
