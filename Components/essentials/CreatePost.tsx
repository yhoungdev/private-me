import { Box, Text ,FormLabel, Textarea,  FormControl} from "@chakra-ui/react";
import InterfaceButton from "../main/Button";
import DefaultInput from '../main/DefaultInput';

const CreatePost =() => {

    return (
        <>
        
            <Box p={'2em'} bg={'var(--dark-shade)'}  color={'#fff'}>

                <Text>Create Post </Text>

                <Box my={'2em'}>
                
                    <Box>   
                        <DefaultInput label="Title" placeholder={'Post Title'}
                        type={'text'} bg={'var(--lighten-dark)'} />
                    </Box>

                    <Box my={'2em'}>

                        <FormLabel> Content </FormLabel>
                        <Textarea bg={'var(--lighten-dark)'} border={'none'}
                        placeholder={'Whats on your mind '} h={'20vh'}/>

                    </Box>

                    <Text fontSize={'0.9em'}> This content will be shown to the general public  </Text>

                    <InterfaceButton bg={'var(--primary-green)'}>Post Item</InterfaceButton>

                </Box>
                
            </Box>
        
        </>
    )

}

export default CreatePost;