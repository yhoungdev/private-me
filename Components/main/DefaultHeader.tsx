import { Box, Flex , Text} from "@chakra-ui/react";
import ContainerLayout from "../../Layouts/ContainerLayout";

const DefaultHeader =() => {
    return (
        <>
        
            <ContainerLayout>
                <Box>

                <Flex justifyContent={'space-between'} my={'1em'}>

                    <Box>

                        
                       <Text  fontFamily={'var(--font-comic)'}> Private.Me</Text>
                       <Box py={'0.3em'} w={'1em'}  bg={'var(--primary-green)'}>

                        </Box>
                    </Box>  

                    <Box>
                        {/* Join Network */}
                    </Box>

                </Flex>

            </Box>
        
            </ContainerLayout>
        </>
    )
}


export default DefaultHeader;