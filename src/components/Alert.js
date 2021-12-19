import { useRef } from "react";
import PropTypes from "prop-types";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  AlertDialogCloseButton,
  Text,
  Box,
  Heading,
  useToast,
} from "@chakra-ui/react";
import AlertButton from "./AlertButton";
import Toast from "./Toast";

const Alert = ({ closeAlert, isOpen, removeLink, title }) => {
  const cancelRef = useRef();
  const toast = useToast();
  return (
    <AlertDialog
      isOpen={isOpen}
      leastDestructiveRef={cancelRef}
      returnFocusOnClose={false}
      onClose={closeAlert}
    >
      <AlertDialogOverlay />
      <AlertDialogContent>
        <AlertDialogHeader
          fontSize="lg"
          fontWeight="bold"
          bg="black"
          color="white"
        >
          Remove Link
        </AlertDialogHeader>
        <AlertDialogCloseButton fontWeight="800" color="white" />
        <AlertDialogBody>
          <Box textAlign="center">
            {" "}
            <Heading fontSize="lg" color="gray.500">
              Do you want to remove:
            </Heading>{" "}
            <Text fontWeight="bold" fontSize="xl">
              {title.toUpperCase()}
            </Text>
          </Box>
        </AlertDialogBody>

        <AlertDialogFooter justifyContent="space-around">
          <AlertButton
            title="Ok"
            handleClick={() => {
              removeLink();
              toast({
                title: "Account created.",
                description: "We've created your account for you.",
                status: "success",
                duration: 1500,
                position: "top",
                render: () => <Toast title={title} />,
              });
              closeAlert();
            }}
          />
          <AlertButton
            title="Cancel"
            ref={cancelRef}
            handleClick={closeAlert}
          />
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
Alert.propTypes = {
  closeAlert: PropTypes.func.isRequired,
  isOpen: PropTypes.bool,
  removeLink: PropTypes.func.isRequired,
  title: PropTypes.string,
};
Alert.defaultProps = { title: "", isOpen: false };
export default Alert;
