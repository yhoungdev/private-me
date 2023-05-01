import { Avatar, Box, Text, Flex } from "@chakra-ui/react";
import ButtonInterface from "@/components/essentials/button";
import ContainerLayout from "@/container/containerLayout";
import makeBlockie from "ethereum-blockies-base64";
import { useState, useEffect } from "react";
import Link from "next/link";

const Welcome = () => {
  const [address, setAddress] = useState();
  //check if localStorage is undefined

  useEffect(() => {
    //check if localStorage is available.
    if (typeof window !== "undefined") {
      const data = localStorage.getItem("address");
      // @ts-ignore
      setAddress(data);
    }
  }, []);
  return (
    <>
      <ContainerLayout>
        <Flex
          alignItems={"center"}
          textAlign={"center"}
          justifyContent={"center"}
          h={"100vh"}
        >
          <Box>
            <Avatar src={makeBlockie("address")} />

            <Text my={"0.5em"}> Welcome Back 👋 </Text>

            <Text w={"70%"} mx={"auto"}>
              {address}{" "}
            </Text>

            <Link href={"/main"}>
              <ButtonInterface bg={"var(--pm-btn-green)"}>
                Continue
              </ButtonInterface>
            </Link>
          </Box>
        </Flex>
      </ContainerLayout>
    </>
  );
};

export default Welcome;
