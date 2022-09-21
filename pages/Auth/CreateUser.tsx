import { Avatar, Box, Center,  Flex } from "@chakra-ui/react";
import InterfaceButton from "../../Components/main/Button";

const CreateUser =() => {
    return (
        <>
        
            <Flex justifyContent={'center'} 
            alignItems={'center'} h={'100vh'}>
             <Box>


                <Center>
                 <Avatar />
                </Center>

                <Box w={'100%'} p={'2em'} my={'2em'} bg={'var(--bright-shade)'}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde eaque officia, commodi quod eligendi enim, sapiente inventore amet ipsam voluptas sequi voluptates asperiores, dolorum velit dolor consectetur illum nobis sint?
                </Box>

               <Center>
               <InterfaceButton bg={'var(--primary-green)'}> Continue</InterfaceButton>
               </Center>

             </Box>
            </Flex>

        </>
    )
}


export default CreateUser;