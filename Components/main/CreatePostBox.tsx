
import { Avatar, Box } from "@chakra-ui/react";

import DefaultInput from "../main/DefaultInput";
import {BiImage} from 'react-icons/bi';
const CreatePostPanel =() => {
    return (
        <>
        
            <Box display={'flex'} gap={'1.5em'} 
                alignItems={'center'}>


                <Avatar/>

                <DefaultInput bg="gray.700" placeholder="Your comment"/>

                <Box bg={'gray.700'} w={'fit-content'}
                    p={'0.8em'} borderRadius={'0.3em'}>
                    <BiImage size={'1.5em'}/>
                </Box>
                
            </Box>
        
        </>
    )
}

export default CreatePostPanel;