import { Box, Text , Flex , Textarea,  Center} from "@chakra-ui/react";
import InterfaceButton from "../main/Button";
import DefaultInput from '../main/DefaultInput';
import {BiImageAdd} from 'react-icons/bi';
import {MdOutlineSettingsVoice , MdOutlineArrowBackIosNew} from 'react-icons/md';
import {useRouter} from 'next/router';

const CreatePost =() => {

    const router = useRouter()

    return (
        <>
        
      


           <Box p={'2em'} my={'1em'} bg={'var(--dark-shade)'}  color={'#fff'}>

<Flex gap={'1em'} onClick={() => router.back()}>

    <Box w={'fit-content'} bg={'var(--lighten-dark)'} 
    
       borderRadius={'0.5em'} p={'0.4em'}>
        <MdOutlineArrowBackIosNew/>
    </Box>
    <Text fontWeight={'bold'}>Speak Your Mind </Text>

</Flex>

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
        <InterfaceButton bg={'var(--primary-green)'}>Talk to the World</InterfaceButton>
    </Center>

</Box>

</Box>

          
        </>
    )

}

export default CreatePost;