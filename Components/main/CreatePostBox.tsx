
import { Avatar, Box } from "@chakra-ui/react";

import DefaultInput from "../main/DefaultInput";
import {BiImage} from 'react-icons/bi';
import Link from 'next/link';

const CreatePostPanel =() => {
    return (
        <>
        
            <Link href={'/main/post'}>
                <Box display={'flex'} gap={'1.5em'} 
                    alignItems={'center'}mb={'3em'}>


                    <Avatar/>

                    <DefaultInput bg="gray.700" placeholder="Your comment"/>

                    <Box bg={'gray.700'} w={'fit-content'}
                        p={'0.8em'} borderRadius={'0.3em'}>
                        <BiImage size={'1.5em'}/>
                    </Box>
                    
                </Box>
            </Link>
        
        </>
    )
}

export default CreatePostPanel;