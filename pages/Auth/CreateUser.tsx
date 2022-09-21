import { Avatar, Box, Center,  Flex , Text } from "@chakra-ui/react";
import InterfaceButton from "../../Components/main/Button";
import { FiCopy } from 'react-icons/fi'
import { ethers } from "ethers";
import { useEffect, useState } from "react";

const CreateUser =() => {

    const [ address , setAddress ] = useState({});
    const [ phrase , setPhrase ] = useState([]);
    const [ imageData , setImageData ] = useState('')

    const blockchainIdentity = async () => {

        const wallet = ethers.Wallet.createRandom();
        //display properties 
        const response = {
            wallet: wallet,
            address: wallet.address,
            mnemonic: wallet._mnemonic().phrase
        }

        //set response from wallet instance to states 
        setAddress(response.address);

        //set items to localStorage 
        

    }


        blockchainIdentity();
        

    return (
        <>
        
            <Flex justifyContent={'center'} 
            alignItems={'center'} h={'80vh'}>
             <Box>


                <Center>
                   <Avatar src={ImageData}/>
                </Center>

                <Text></Text>

                <Text textAlign={'center'} my={'0.5em'} 
                fontSize={'0.8em'} w={'80%'} mx={'auto'}>Copy and Save your pass phrase, this is what will be used as your password  </Text>

                <Box w={'100%'} p={'2em'} my={'2em'} bg={'var(--bright-shade)'}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde eaque officia, commodi quod eligendi enim, sapiente inventore amet ipsam voluptas sequi voluptates asperiores, dolorum velit dolor consectetur illum nobis sint?
               
                    <Box my={'2em'}  w={'fit-content'}>
                       {/* <Text p={'0.5em'} borderRadius={'0.5em'} 
                       bg={'var(--dark-shade)'} cursor={'pointer'}>
                            <FiCopy size={'1.5em'}/>
                        </Text> */}
                    </Box>
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