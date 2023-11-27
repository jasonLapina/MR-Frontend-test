import {
  Box,
  Button,
  Center,
  Grid,
  HStack,
  Image,
  Spinner,
  Text,
  VStack,
  useToast,
} from "@chakra-ui/react";
import useProduct from "../hooks/useProduct";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../store";
function Product() {
  const { data, isLoading } = useProduct();
  const [selectedSize, setSelectedSize] = useState(null);
  const toast = useToast();
  const dispatch = useDispatch();

  if (isLoading)
    return (
      <Center my='32px'>
        <Spinner />
      </Center>
    );

  const { id, title, description, price, imageURL, sizeOptions } = data;
  const formattedPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(price);

  const handleAdd = () => {
    if (!selectedSize)
      return toast({
        position: "top",
        status: "error",
        title: "Select a size.",
      });
    const item = {
      id,
      title,
      price: formattedPrice,
      size: selectedSize,
      imageURL,
    };
    dispatch(addToCart(item));
  };

  return (
    <Grid
      gridTemplateColumns={{ base: "1fr", md: "1fr 1fr" }}
      justifyContent='center'
      justifyItems='center'
      alignItems='start'
      mt='16px'
      columnGap='80px'
      rowGap='40px'
    >
      <Image maxW='400px' alt={title} src={imageURL} />
      <VStack alignItems='normal' gap='24px'>
        <Text fontSize='24px'>{title}</Text>
        <Text
          py='4px'
          borderBlock={{ base: "none", md: "solid 1px #f5f5f5" }}
          fontWeight='bold'
        >
          {formattedPrice}
        </Text>
        <Text color='#888'>{description}</Text>
        <Box>
          <Box fontSize='14px'>
            <Text
              letterSpacing='wider'
              mb='8px'
              color='#888'
              fontWeight='semibold'
            >
              SIZE
              <Box as='span' color='#C90000'>
                *
              </Box>
              <Box as='span'> {selectedSize}</Box>
            </Text>
          </Box>
          <HStack gap='8px'>
            {sizeOptions.map((size) => (
              <Center
                key={size.id}
                border='solid'
                borderColor={selectedSize === size.label ? "#222" : "#ccc"}
                borderWidth={selectedSize === size.label ? "2px" : "1px"}
                color={selectedSize === size.label ? "#222" : "#ccc"}
                boxSize='48px'
                cursor='pointer'
                onClick={() => setSelectedSize(size.label)}
              >
                {size.label}
              </Center>
            ))}
          </HStack>
        </Box>
        <Button
          bgColor='white'
          borderRadius='none'
          border='solid 2.4px #222'
          w='fit-content'
          fontWeight='bold'
          px='32px'
          _hover={{
            color: "white",
            bgColor: "#222",
          }}
          transition='all .2s'
          onClick={handleAdd}
        >
          ADD TO CART
        </Button>
      </VStack>
    </Grid>
  );
}

export default Product;
