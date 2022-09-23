import { Avatar, Box, Text,  Center, Flex } from "@chakra-ui/react";
import InterfaceButton from "../../Components/main/Button";
import ContainerLayout from "../../Layouts/ContainerLayout";

const Welcome =() => {
    return (
        <>

            <ContainerLayout>

                <Text fontWeight={'bold'} fontSize={'5em'}
                  position={'absolute'} left={'-2em'} color={"gray.900"} >Freedom</Text>
                <Flex alignItems={'center'} textAlign={'center'} justifyContent={'center'} h={"100vh"}>
                 <Box >


                     <Avatar/>

                     <Text my={'0.5em'}> Welcome Back 👋 </Text>

                     <Text >0x23d039ddjskaxnje0022 </Text>

                     <InterfaceButton bg={'var(--primary-green)'}>Continue</InterfaceButton>

                  </Box>
                </Flex>


            </ContainerLayout>
        
        </>
    )
}

export default Welcome; 