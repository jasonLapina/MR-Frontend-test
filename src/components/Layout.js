import { Box } from "@chakra-ui/react";
function Layout({ children }) {
  return (
    <Box maxW='var(--maxW)' mx='auto' px='16px' py='24px'>
      {children}
    </Box>
  );
}

export default Layout;
