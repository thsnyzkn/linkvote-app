import { useState } from "react";
import { Box, Stack } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import Alert from "./Alert";
import VoteButtons from "./VoteButtons";
import ScoreBox from "./ScoreBox";
import DeleteButton from "./DeleteButton";
import TitleLinkPanel from "./TitleLinkPanel";

const LinksList = ({ sortedList, upvoteLink, downVoteLink, removeLink }) => {
  const [isVisible, setVisible] = useState("");
  const [isOpen, setIsOpen] = useState({});
  const openAlert = (id) => {
    setIsOpen({ ...isOpen, [id]: true });
  };
  const closeAlert = (id) => {
    setIsOpen({ ...isOpen, [id]: false });
  };
  const dispatch = useDispatch();
  const listToBeRendered = sortedList?.map(
    ({ id, points, title, url }, index) => (
      <Box
        data-testid="link-list-element"
        key={id}
        as="li"
        position="relative"
        d="flex"
        textAlign="center"
        justifyContent="start"
        pt={1}
        pr={2}
        mt={3}
        onMouseEnter={() => setVisible(id)}
        onMouseLeave={() => setVisible("")}
        _hover={{
          bg: "secondary",
          cursor: "pointer",
          borderRadius: "md",
        }}
      >
        <ScoreBox points={points} />
        <Stack ml={4} pl={1}>
          <TitleLinkPanel url={url} title={title} />
          <VoteButtons
            upvoteLink={() => dispatch(upvoteLink(id))}
            downVoteLink={() => dispatch(downVoteLink(id))}
          />
        </Stack>
        {isVisible === id ? (
          <DeleteButton openAlert={() => openAlert(id)} />
        ) : null}
        <Alert
          isOpen={isOpen[id]}
          closeAlert={() => closeAlert(id)}
          removeLink={() => dispatch(removeLink(id))}
          title={title}
        />
      </Box>
    )
  );
  return <ul data-testid="links-list">{listToBeRendered}</ul>;
};

export default LinksList;
