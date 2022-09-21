import { Avatar, Box, Center,  Flex , Text } from "@chakra-ui/react";
import InterfaceButton from "../../Components/main/Button";
import { FiCopy } from 'react-icons/fi'
import { ethers } from "ethers";
import { useEffect, useState } from "react";

const CreateUser =() => {

    const [ address , setAddress ] = useState <any>();
    const [ phrase , setPhrase ] = useState<any>([]);

    const blockchainIdentity = async () => {

        const wallet = ethers.Wallet.createRandom();
        //display properties 
        const response = {
            wallet: wallet,
            address: wallet.address,
            mnemonic: wallet._mnemonic().phrase
        }


        console.log(response)
        //set response from wallet instance to states 
        setAddress(response.address);
        setPhrase(response.mnemonic)

        //set items to localStorage 
        

    }

    useEffect(() => {
        blockchainIdentity();
    }, [])


    
        

    return (
        <>
        
            <Flex justifyContent={'center'} 
            alignItems={'center'} h={'80vh'}>
             <Box>


                <Center>
                   <Avatar src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAqklEQVR4AcXBMa3DMABF0Zun8EikwvDWySw8FEcmE/lmEQLhYatA0tVdXEXt1ztnej5uJwNL2fhGS5kRYSbMhNlcY6C37gf/qcZAT5gJM2E2af476bSUGVnKxkhLmZGlbPSEmTATZjMXtZT5JWEmzISZMBNmwkyYTc/H7eSCGgMj635whTATZsJMmAkzYSbM5hoDvXU/6C1l403hgzu9ljK9GgM9YSbMhNkL4UAhJXxPkZcAAAAASUVORK5CYII="/>
                </Center>

                <Text textAlign={'center'} my={'1em'}>{address}</Text>


                <Text textAlign={'center'} p={'1em'} bg={'var(--dark-shade)'} 
                   w={'fit-content'} mx={'auto'} >💡</Text>

                <Text textAlign={'center'} my={'0.5em'} 

                fontSize={'0.8em'} w={'80%'} mx={'auto'}>Copy and Save your pass phrase, this is what will be used as your password  </Text>

                <Box w={'100%'} p={'2em'} my={'2em'} bg={'var(--bright-shade)'}>
                   
                    {/* display mnemonic phrase */}
                    <Text fontWeight={'bold'}>{phrase}</Text>
               
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