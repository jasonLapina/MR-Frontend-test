import {
  Box,
  Center,
  Grid,
  HStack,
  Image,
  Spinner,
  Text,
  VStack,
} from "@chakra-ui/react";
import useProduct from "../hooks/useProduct";
import { useState } from "react";
function Product() {
  const { data, isLoading } = useProduct();
  const [selectedSize, setSelectedSize] = useState(null);

  if (isLoading)
    return (
      <Center my='32px'>
        <Spinner />
      </Center>
    );

  const { title, description, price, imageURL, sizeOptions } = data;
  const formattedPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(price);

  console.log(sizeOptions);

  return (
    <Grid
      gridTemplateColumns='1fr 1fr'
      justifyContent='center'
      justifyItems='center'
      alignItems='start'
      mt='16px'
    >
      <Image maxW='400px' alt={title} src={imageURL} />
      <VStack alignItems='normal' gap='24px'>
        <Text fontSize='20px'>{title}</Text>
        <Text py='4px' borderBlock='solid 1px #f5f5f5' fontWeight='bold'>
          {formattedPrice}
        </Text>
        <Text color='#888'>{description}</Text>
        <Box>
          <Box fontSize='14px'>
            <Text mb='8px' color='#888' fontWeight='semibold'>
              SIZE{" "}
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
      </VStack>
    </Grid>
  );
}

export default Product;
