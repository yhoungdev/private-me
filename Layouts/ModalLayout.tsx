import { Modal, ModalBody, ModalContent, ModalCloseButton, ModalHeader} from "@chakra-ui/react";


const ModalLayout =({children , isOpen, title , onClose } : any ) => {
    return (
        <>

            <Modal isOpen={isOpen} onClose={onClose} size={['xs','md']} >
                <ModalContent bg={'var(--dark-shade)'} py={'3em'} >

                   <ModalCloseButton/>
                   <ModalHeader >{title}</ModalHeader>
                   <ModalBody>
                      {children}
                   </ModalBody>

                </ModalContent> 
            </Modal>

        </>
    )
}

export default ModalLayout;