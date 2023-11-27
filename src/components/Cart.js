import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  Box,
  HStack,
  Image,
  Text,
  VStack,
  PopoverArrow,
} from "@chakra-ui/react";
import { useSelector } from "react-redux";

function Cart() {
  const cart = useSelector((state) => state.cart);
  const numCartItems = cart.reduce((acc, cur) => cur.quantity + acc, 0);

  return (
    <Box mt='16px' bgColor='#f6f6f7' maxW='1440px' px='16px' mx='auto'>
      <Box display='flex' maxW='var(--maxW)' justifyContent='end' mx='auto'>
        <Popover offset={[-120, 0]}>
          {({ isOpen }) => (
            <>
              <PopoverTrigger>
                <Box
                  as='button'
                  fontSize='12px'
                  py='6px'
                  fontWeight='semibold'
                  color={isOpen ? "#222" : "#888"}
                >
                  My Cart ( {numCartItems} )
                </Box>
              </PopoverTrigger>
              <PopoverContent borderRadius='none'>
                <PopoverArrow />
                <PopoverBody p='16px'>
                  <VStack align='normal' gap='24px'>
                    {cart.map((item, i) => {
                      const { title, imageURL, price, quantity, size, id } =
                        item;
                      return (
                        <HStack
                          gap='24px'
                          key={id + i}
                          alignItems='start'
                          fontWeight='semibold'
                          fontSize='15px'
                        >
                          <Image maxW='80px' src={imageURL} alt={title} />
                          <VStack gap='4px' align='normal'>
                            <Text>{title}</Text>
                            <Text>
                              {quantity}x{" "}
                              <Box as='span' fontWeight='bold'>
                                {price}
                              </Box>
                            </Text>
                            <Text mt='6px' fontSize='14px'>
                              Size: {size}
                            </Text>
                          </VStack>
                        </HStack>
                      );
                    })}
                  </VStack>
                </PopoverBody>
              </PopoverContent>
            </>
          )}
        </Popover>
      </Box>
    </Box>
  );
}

export default Cart;
