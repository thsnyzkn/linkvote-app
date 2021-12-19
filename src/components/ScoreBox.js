import PropTypes from "prop-types";
import { Box, Heading, Text } from "@chakra-ui/react";

const ScoreBox = ({ points }) => (
  <Box
    bg="primary"
    p={4}
    mb={3}
    ml={3}
    border="1px"
    borderColor="gray.300"
    borderRadius="md"
  >
    <Heading
      fontWeight="bolder"
      fontSize="2.5rem"
      lineHeight="1.75rem"
      data-testid="points-value"
    >
      {points}
    </Heading>
    <Text>POINTS</Text>
  </Box>
);
ScoreBox.propTypes = { points: PropTypes.number };
ScoreBox.defaultProps = { points: 0 };
export default ScoreBox;
