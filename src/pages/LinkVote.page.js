import Divider from "../components/Divider";
import SubmissionBox from "../components/SubmissionBox";
import SortSelection from "../components/SortSelection";
import LinksList from "../components/LinksList";
import PaginationList from "../components/PaginationList";
import { useDispatch, useSelector } from "react-redux";
import {
  selectLinks,
  upvoteLink,
  downVoteLink,
  removeLink,
  sortByChoice,
} from "../features/linkList/linkSlice";
import {
  selectPages,
  goPrevPage,
  goNextPage,
  goClickedPage,
} from "../features/pagination/paginationSlice";
const LinkList = () => {
  const dispatch = useDispatch();
  const linkList = useSelector(selectLinks);
  const pagination = useSelector(selectPages);
  return (
    <>
      {" "}
      <SubmissionBox />
      <Divider />
      <SortSelection />
      <LinksList />
      <PaginationList />
    </>
  );
};

export default LinkList;
