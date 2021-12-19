import PropTypes from "prop-types";
import { Button } from "@chakra-ui/react";

const AlertButton = ({ handleClick, ref, title }) => (
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
    ref={ref}
    onClick={handleClick}
  >
    {title.toUpperCase()}
  </Button>
);
AlertButton.propTypes = {
  handleClick: PropTypes.func.isRequired,
  ref: PropTypes.func,
  title: PropTypes.string,
};
AlertButton.defaultProps = { title: "" };
export default AlertButton;
