import { Link as RouterLink } from "react-router-dom";
import { HStack, IconButton, Heading } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
const SubmissionBox = () => (
  <HStack
    spacing={10}
    align="center"
    justifyContent="space-between"
    bg="secondary"
    pl="3"
    py="3"
    pr="6"
    border="1px"
    borderRadius="md"
    borderColor="gray.300"
  >
    <RouterLink to={`/new-link`} mr="5">
      {" "}
      <IconButton
        aria-label="Add new post"
        icon={<AddIcon />}
        height="6rem"
        minW="6rem"
        border="1px"
        fontSize="32px"
        bg="primary"
        borderColor="gray.300"
      />
    </RouterLink>

    <Heading as="h3">SUBMIT A LINK</Heading>
  </HStack>
);

export default SubmissionBox;
