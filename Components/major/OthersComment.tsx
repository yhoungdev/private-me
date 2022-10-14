import { Box } from '@chakra-ui/react';
import { Avatar } from '@chakra-ui/react';
const OthersComment =() => {

    return (
        <>

            <Box display={'flex'} gap={'1em'} my={'1.5em'}>
                <Avatar/>

                <Box p={'1em'} bg={'var( --bright-shade)'}
                    borderRadius={'0.3em'}>

                       Maybe consider trying a different format 
                       to package your skills like functional resumes. 
                       That way you can highlight your skillset and not in chronicle orders.
                        You can explore more in our resume tips. It will help to
            
                </Box>

            </Box>
        
        </>
    )
}

export default OthersComment;