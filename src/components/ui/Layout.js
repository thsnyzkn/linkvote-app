import PropTypes from "prop-types";
import { Flex } from "@chakra-ui/react";
const Layout = ({ children }) => (
  <Flex direction="column" maxW={{ base: "100%", lg: "40%" }} mx="auto" p={4}>
    {children}
  </Flex>
);

Layout.propTypes = { children: PropTypes.node };

export default Layout;
