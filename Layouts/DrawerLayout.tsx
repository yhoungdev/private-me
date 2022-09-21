import { Drawer, DrawerBody, DrawerContent , DrawerHeader} from "@chakra-ui/react";

const DrawerLayout =({isOpen , onClose , title,  children}: any) => {
    return (
        <>

          <Drawer isOpen={isOpen}  onClose={onClose} size={['full' , 'md']}>

            <DrawerHeader>{title}</DrawerHeader>
            <DrawerContent bg={'var(--dark-shade)'}>

                <DrawerBody>
                    {children}
                </DrawerBody>

            </DrawerContent>

          </Drawer>
        
        </>
    )
}

export default DrawerLayout;