import { Box, Text ,FormLabel, Textarea,  Center} from "@chakra-ui/react";
import InterfaceButton from "../main/Button";
import DefaultInput from '../main/DefaultInput';
import {BiImageAdd} from 'react-icons/bi';
import {MdOutlineSettingsVoice} from 'react-icons/md';


const CreatePost =() => {

    return (
        <>
        
            <Box p={'2em'} bg={'var(--dark-shade)'}  color={'#fff'}>

                <Text fontWeight={'bold'}>Speak Your Mind </Text>

                <Box my={'2em'}>
                
                    <Box>   
                        {/* <DefaultInput label="Title" placeholder={'Post Title'}
                        type={'text'} bg={'var(--lighten-dark)'} /> */}
                    </Box>

                    <Box my={'2em'}>

                       
                        <Textarea bg={'var(--lighten-dark)'} border={'none'}
                        placeholder={'Whats on your mind '} h={'20vh'}/>

                    </Box>

                    <Text fontSize={'0.9em'}> This content will be shown to the general public  </Text>

                    <Box display={'flex'} gap={'1em'} 
                    justifyContent={'center'}>

                        <Box bg={'var(--background)'} p={'1.5em'}
                            w={'fit-content'} borderRadius={'0.5em'} 
                            my={'1em'}>
                            <BiImageAdd size={'2em'}/>
                        </Box>

                        <Box bg={'var(--background)'} p={'1.5em'}
                            w={'fit-content'} borderRadius={'0.5em'} 
                            my={'1em'}>
                            <MdOutlineSettingsVoice size={'2em'}/>
                        </Box>

                    </Box>


                    <Center>
                        <InterfaceButton bg={'var(--primary-green)'}>Post Item</InterfaceButton>
                    </Center>

                </Box>
                
            </Box>
        
        </>
    )

}

export default CreatePost;