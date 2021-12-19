import { Box } from "@chakra-ui/react";
const Toast = ({ title, add }) => (
  <Box
    mt={13}
    color="green.500"
    px={30}
    py={5}
    bg="green.100"
    border="1px"
    w="100%"
    borderColor="green.500"
    borderRadius="md"
  >
    {title.toUpperCase()} {add ? "added" : "removed"}.
  </Box>
);

export default Toast;
