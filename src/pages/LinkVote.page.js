import { useState, useEffect } from "react";
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
import { sortLinks, paginateContent } from "../utils/helpers";
const LinkList = () => {
  const dispatch = useDispatch();
  const linkList = useSelector(selectLinks);
  const pagination = useSelector(selectPages);
  const sortedList = paginateContent(
    sortLinks(linkList),
    pagination.currentPage
  );
  useEffect(() => {
    linkList?.links.length !== 0 &&
      sortedList.length === 0 &&
      dispatch(goClickedPage(pagination.currentPage - 1));
  }, [dispatch, pagination.currentPage, sortedList, linkList]);
  return (
    <>
      {" "}
      <SubmissionBox />
      <Divider />
      <SortSelection sortByChoice={sortByChoice} />
      <LinksList
        sortedList={sortedList}
        upvoteLink={upvoteLink}
        downVoteLink={downVoteLink}
        removeLink={removeLink}
      />
      <PaginationList
        listOfPages={linkList?.links}
        currentPage={pagination.currentPage}
        goPrevPage={goPrevPage}
        goClickedPage={goClickedPage}
        goNextPage={goNextPage}
      />
    </>
  );
};

export default LinkList;
