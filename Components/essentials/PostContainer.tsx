import {Box, Text, Avatar  } from '@chakra-ui/react';

const PostContainer =() => {
    return (
        <>
        
            <Box p={'1.6em'} bg={'var(--lighten-dark)'} borderRadius={'0.5em'}>
                
                <Box display={'flex'} alignItems={'center'} gap={'1em'}>

                    <Avatar />
                    <Box>
                        <Text>Username</Text>
                        <Text>Username</Text>
                    </Box>

                </Box>

                <Box my={'1em'}>

                 Edward Joseph Snowden (born June 21, 1983) is an American former computer intelligence 


                </Box>

            </Box>
        
        </>
    )
}


export default  PostContainer;