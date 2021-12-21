import PropTypes from "prop-types";
import { Button } from "@chakra-ui/react";

const AlertButton = ({ handleClick, reference, title }) => (
  <Button
    minW="8rem"
    height="2.5rem"
    fontWeight="800"
    bg="black"
    color="white"
    _hover={{ bg: "black" }}
    _active={{ bg: "black" }}
    variant="solid"
    borderRadius="50px"
    ref={reference}
    onClick={handleClick}
  >
    {title.toUpperCase()}
  </Button>
);
AlertButton.propTypes = {
  handleClick: PropTypes.func.isRequired,
  reference: PropTypes.object,
  title: PropTypes.string,
};
AlertButton.defaultProps = { title: "", reference: {} };
export default AlertButton;
