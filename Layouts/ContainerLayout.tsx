import { Container } from "@chakra-ui/react";


interface Props {
    children ?: any
}

const ContainerLayout =({children}: Props) => {
    return (
        <>

            <Container maxW={['100%' , '80%']}>

                    
                    {children}


            </Container>
        
        </>
    )
}

export default ContainerLayout;