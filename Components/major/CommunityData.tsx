import { Avatar,Text, Box, Flex } from "@chakra-ui/react";

const CommunityData =() => {
    return (
        <>
        
            <Box my={'1em'} fontFamily={'var(--primay-var(--font-satoshi)'}>

                <Flex gap={'1em'}>

                    <Avatar/>

                    <Box>
                        <Text fontWeight={'bold'}>Linux Foundation</Text>
                        <Text>28k Posts</Text>
                    </Box>

                </Flex>

                <Box>
                
                </Box>

            </Box>
        
        </>
    )
}


export default CommunityData;