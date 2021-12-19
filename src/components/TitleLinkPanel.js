import PropTypes from "prop-types";
import { Stack, Flex, Link, Text } from "@chakra-ui/react";

const TitleLinkPanel = ({ title, url }) => (
  <Stack align="start" justify="center">
    <Flex justifyContent="space-between" w="100%" mb="0">
      <Text fontWeight="bold">{title}</Text>
    </Flex>
    <Link _hover={{ textDecoration: "none" }} color="parimary.100">
      ({url})
    </Link>
  </Stack>
);
TitleLinkPanel.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default TitleLinkPanel;
