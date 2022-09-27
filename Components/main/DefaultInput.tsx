import { FormControl, FormLabel, Input } from "@chakra-ui/react";


interface Props {

    label?: string ,
    value?: any,
    placeholder ?: string,
    type ?: any ,
    bg?: string,
    border ?: any
    
}

const DefaultInput =({label , bg, border,  value , placeholder, type }: Props) => {
    return (
        <>

            <FormControl>
                <FormLabel>{label}</FormLabel>
                <Input p={'1.5em'} type={type}
                 placeholder={placeholder} bg={bg}
                 variant={'filled'} border={'1px'}  />
            </FormControl>
        
        </>
    )
}


export default DefaultInput;