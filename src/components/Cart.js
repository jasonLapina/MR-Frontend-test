import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
  Box,
} from "@chakra-ui/react";

function Cart() {
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
                  My Cart ( 4 )
                </Box>
              </PopoverTrigger>
              <PopoverContent borderRadius='none'>
                <PopoverBody>
                  Are you sure you want to have that milkshake?
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
