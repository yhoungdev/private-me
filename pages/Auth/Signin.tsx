import { Avatar, Box, Center,  Flex , Text, Textarea } from "@chakra-ui/react";
import InterfaceButton from "../../Components/main/Button";
import { FiCopy } from 'react-icons/fi'
import { ethers } from "ethers";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const RestoreAccount =() => {

  
    const [ loader , setLoader ] = useState(false);
    const [ phrase , setPhrase ] = useState<string>('');

    //Restore user identity
    const restoreIndentity = async () => {

        setLoader(true);


        //get wallet from Mnemonic

        try {

            const wallet = ethers.Wallet.fromMnemonic(phrase);
            toast.success('Account Restored Successfully' , {
                theme: 'colored'
            })

          
            if (typeof window !== "undefined") {

                localStorage.setItem('address', wallet.address)
            
                }
            //navigate('/Auth/welcome')
            window.location.href='/Auth/welcome'

            
        } catch ( error  ) {
          
            toast.error('Invalid Mnemonic' , {
                theme: 'colored'
            })


            
        }

        setTimeout(() => {
            setLoader(false);
        }, 1500)



    }





    
        

    return (
        <>
              <ToastContainer/>

            <Flex justifyContent={'center'} 
            alignItems={'center'} h={'80vh'}>
             <Box>


                <Center>
                   <Avatar display={'none'} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAqklEQVR4AcXBMa3DMABF0Zun8EikwvDWySw8FEcmE/lmEQLhYatA0tVdXEXt1ztnej5uJwNL2fhGS5kRYSbMhNlcY6C37gf/qcZAT5gJM2E2af476bSUGVnKxkhLmZGlbPSEmTATZjMXtZT5JWEmzISZMBNmwkyYTc/H7eSCGgMj635whTATZsJMmAkzYSbM5hoDvXU/6C1l403hgzu9ljK9GgM9YSbMhNkL4UAhJXxPkZcAAAAASUVORK5CYII="/>
                </Center>
                
                
            
                <Text textAlign={'center'} p={'1em'} bg={'var(--dark-shade)'} 
                   w={'fit-content'} mx={'auto'} >💡</Text>

                <Text textAlign={'center'} my={'0.5em'} 

                fontSize={'0.8em'} w={'80%'} mx={'auto'}>Input your recovery phrase to restore your account</Text>

                
                <Textarea  bg={'var(--bright-shade)'} w={'100%'}
                 placeholder={'Enter recovery phrase'}
                 onChange={ e => setPhrase(e.target.value)}/>
               

               <Center>
                   <InterfaceButton bg={'var(--primary-green)'}
                    onClick={restoreIndentity}  isLoading={loader}
                    loadingText={'Restoring Wallet'}> Continue</InterfaceButton>
               </Center>

             </Box>
            </Flex>

        </>
    )
}


export default RestoreAccount;