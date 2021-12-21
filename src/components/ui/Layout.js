import PropTypes from "prop-types";
import { Flex } from "@chakra-ui/react";
import Header from "../Header";
const Layout = ({ children }) => (
  <>
    <Header />
    <Flex direction="column" maxW={{ base: "100%", lg: "35%" }} mx="auto" p={4}>
      {children}
    </Flex>
  </>
);

Layout.propTypes = { children: PropTypes.node };

export default Layout;
