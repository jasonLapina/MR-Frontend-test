import { Center, Grid, Image, Spinner, Text, VStack } from "@chakra-ui/react";
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
  const formattedPrice = new Intl.NumberFormat(undefined, {
    style: "currency",
    currency: "USD",
  }).format(price);

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
        <Text fontSize='20px' fontWeight='semibold'>
          {title}
        </Text>
        <Text py='4px' borderBlock='solid 1px #f5f5f5' fontWeight='bold'>
          {formattedPrice}
        </Text>
        <Text color='#888'>{description}</Text>
      </VStack>
    </Grid>
  );
}

export default Product;
