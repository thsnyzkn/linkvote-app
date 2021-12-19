import PropTypes from "prop-types";
import { Stack, Button } from "@chakra-ui/react";

const VoteButtons = ({ upvoteLink, downVoteLink }) => {
  return (
    <Stack direction="row" justfiy="space-around">
      <Button leftIcon="arrow-up" variant="ghost" pl={1} onClick={upvoteLink}>
        Up Vote
      </Button>
      <Button
        leftIcon="arrow-down"
        variant="ghost"
        pl={1}
        onClick={downVoteLink}
      >
        Down Vote
      </Button>
    </Stack>
  );
};
VoteButtons.propTypes = {
  /**Redux action that increments the point value by 1 that must be provided. */
  upvoteLink: PropTypes.func.isRequired,
  /**Redux action that decrements the point value by 1 that must be provided. */
  downVoteLink: PropTypes.func.isRequired,
};
export default VoteButtons;
