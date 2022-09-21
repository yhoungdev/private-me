import { Drawer, DrawerBody, DrawerContent , DrawerHeader} from "@chakra-ui/react";

const DrawerLayout =({isOpen , onClose , title,  children}: any) => {
    return (
        <>

          <Drawer isOpen={isOpen}  onClose={onClose}>

            <DrawerHeader>{title}</DrawerHeader>
            <DrawerContent>

                <DrawerBody>
                    {children}
                </DrawerBody>

            </DrawerContent>

          </Drawer>
        
        </>
    )
}

export default DrawerLayout;