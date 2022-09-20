import { Container } from "@chakra-ui/react";


interface Props {
    children ?: string
}

const ContainerLayout =({children}: Props) => {
    return (
        <>

            <Container>

                    
                    {children}


            </Container>
        
        </>
    )
}

export default ContainerLayout;