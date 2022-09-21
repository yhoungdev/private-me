import { Drawer, DrawerBody,DrawerCloseButton,DrawerOverlay, DrawerContent , DrawerHeader} from "@chakra-ui/react";

const DrawerLayout =({isOpen , onClose , title,  children}: any) => {
    return (
        <>

          <Drawer isOpen={isOpen}  onClose={onClose} size={['full' , 'md']} blockScrollOnMount={false}>
             <DrawerOverlay/>
            <DrawerHeader>{title}</DrawerHeader>
            <DrawerContent bg={'var(--dark-shade)'}>
            <DrawerCloseButton/>
                <DrawerBody>
                    {children}
                </DrawerBody>

            </DrawerContent>

          </Drawer>
        
        </>
    )
}

export default DrawerLayout;