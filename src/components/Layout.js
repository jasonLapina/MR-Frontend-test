import { Box } from "@chakra-ui/react";
function Layout({ children }) {
  return (
    <Box maxW='1280px' mx='auto' px='16px' py='24px'>
      {children}
    </Box>
  );
}

export default Layout;
