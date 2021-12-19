import { Box, Stack } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import Alert from "./Alert";
import VoteButtons from "./VoteButtons";
import ScoreBox from "./ScoreBox";
import DeleteButton from "./DeleteButton";
import TitleLinkPanel from "./TitleLinkPanel";

const LinksList = ({
  sortedList,
  upvoteLink,
  downVoteLink,
  openAlert,
  closeAlert,
  removeLink,
  isOpen,
}) => {
  const dispatch = useDispatch();
  const listToBeRendered = sortedList?.map(({ id, points, title, url }) => {
    return (
      <>
        <Box
          key={id}
          position="relative"
          d="flex"
          textAlign="center"
          justifyContent="start"
          pt={1}
          pr={2}
          mt={3}
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
          <DeleteButton openAlert={() => openAlert(id)} />
          <Alert
            openAlert={() => openAlert(id)}
            isOpen={isOpen[id]}
            closeAlert={() => closeAlert(id)}
            removeLink={() => dispatch(removeLink(id))}
            title={title}
          />
        </Box>
      </>
    );
  });
  return <>{listToBeRendered}</>;
};

export default LinksList;
