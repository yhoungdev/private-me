
import { Text } from "@chakra-ui/react";
const BigHeading =( {children , color, fontSize} : any) => {
    return (
        <>
        

                            <Text fontWeight={'bold'} fontSize={fontSize} color={color}
                                textAlign={'center'} w={['', '580px']} lineHeight={['','97px']}>
                                    {children}
                            </Text>

        </>
    )
}


export default BigHeading;