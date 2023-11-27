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
  useMediaQuery,
  Icon,
} from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { ImCart } from "react-icons/im";

function Cart() {
  const cart = useSelector((state) => state.cart);
  const numCartItems = cart.reduce((acc, cur) => cur.quantity + acc, 0);

  const [isTablet] = useMediaQuery("(max-width: 768px)");

  return (
    <Box mt='16px' bgColor='#f6f6f7' maxW='1440px' px='16px' mx='auto'>
      <Box
        display='flex'
        maxW='var(--maxW)'
        justifyContent='end'
        mx='auto'
        px={{ base: "16px", md: "0px" }}
      >
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
                  {!isTablet ? "My Cart" : <Icon as={ImCart} mr='4px' />} ({" "}
                  {numCartItems} )
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
