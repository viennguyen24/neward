"use client";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
  UseDisclosureProps,
  Button,
  Divider,
} from "@nextui-org/react";
import EmptyCardIcon from "@/assets/empty-cart";
import { FiShoppingCart } from "react-icons/fi";
interface CartProps {
  header: string;
  footer?: string;
}
import { formatPrice } from "@/shared/utils/functions";
const Pricing: React.FC<{ transactionFee: number; totalCost: number }> = ({
  transactionFee,
  totalCost,
}) => {
  return (
    <>
      <Divider className="my-4" />
      <div className="w-full flex flex-col justify-center">
        <div className="flex justify-between w-full">
          <span>Transaction fee</span>
          <span>{formatPrice(transactionFee)}</span>
        </div>
        <div className="flex justify-between w-full">
          <span>Total cost</span>
          <span>{formatPrice(totalCost)}</span>
        </div>
      </div>
    </>
  );
};
const Cart: React.FC<CartProps> = ({ header, footer }) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const items = 1;
  const transactionFee = 0;
  const totalCost = 0;
  return (
    <>
      <Button onClick={onOpen} isIconOnly>
        <FiShoppingCart />
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="full">
        <ModalContent className="max-w-[50%] absolute right-0">
          {() => (
            <>
              <ModalHeader className="font-bold text-3xl">
                <h1>{header}</h1>
              </ModalHeader>
              <ModalBody>
                {items > 0 ? (
                  <div>
                    <p>Cart Items</p>
                    <Pricing
                      transactionFee={transactionFee}
                      totalCost={totalCost}
                    />
                  </div>
                ) : (
                  <div>
                    <h1>Oops there's nothing here</h1>
                    <div className="max-w-[50%]">
                      <EmptyCardIcon />
                    </div>
                  </div>
                )}
              </ModalBody>
              <ModalFooter>
                <span>{footer}</span>
                <Button onPress={onOpenChange}>Close</Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};
export default Cart;
