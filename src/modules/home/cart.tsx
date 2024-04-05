"use client" 
import {
    Modal, 
    ModalContent, 
    ModalHeader, 
    ModalBody, 
    ModalFooter,
    useDisclosure,
    UseDisclosureProps,
    Button
  } from "@nextui-org/react";
  import { FiShoppingCart } from "react-icons/fi";
  interface CartProps{
    children:React.ReactNode[]
  }

  const Cart:React.FC<CartProps> = () =>{
    const {isOpen, onOpen, onClose} = useDisclosure()
    return(
        <>
            <Button onClick={onOpen} isIconOnly >
                <FiShoppingCart/>
            </Button>
            <Modal isOpen={isOpen} onOpenChange={onClose}>
                <ModalContent >
                  {(onClose) => {
                    return(
                      <>
                        <ModalHeader>Heading</ModalHeader>
                        <ModalBody>Content</ModalBody>
                        <ModalFooter>Footer</ModalFooter>
                        <Button onPress={onClose}>Close</Button>
                      </>
                    )
                  }}
                </ModalContent>
            </Modal>
        </>
    )
  }
  export default Cart