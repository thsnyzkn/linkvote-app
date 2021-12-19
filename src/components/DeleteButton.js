import PropTypes from "prop-types";
import { Box } from "@chakra-ui/react";
import { AiFillStop } from "react-icons/ai";

const DeleteButton = ({ openAlert }) => (
  <Box
    onClick={openAlert}
    as={AiFillStop}
    position="absolute"
    size="32px"
    top="-12px"
    right="-10px"
    color="red.600"
  />
);

DeleteButton.propTypes = {
  openAlert: PropTypes.func.isRequired,
};
DeleteButton.defaultProps = {};

export default DeleteButton;
