import React from "react";
import { useDispatch } from "react-redux";
import { Flex, Button, IconButton } from "@chakra-ui/react";

const PaginationList = ({
  listOfPages,
  currentPage,
  goPrevPage,
  goClickedPage,
  goNextPage,
}) => {
  const dispatch = useDispatch();
  return (
    <>
      {listOfPages?.length > 5 ? (
        <Flex mt={5} justifyContent="center">
          <IconButton
            aria-label="Previous paginated List"
            icon="chevron-left"
            variantColor="gray.900"
            variant="ghost"
            _hover={{ fontSize: "lg" }}
            onClick={() => dispatch(goPrevPage())}
            disabled={currentPage === 1}
          />
          {[...Array(Math.ceil(listOfPages?.length / 5))].map((_, index) => {
            return (
              <Button
                key={index}
                variantColor="gray.900"
                variant={currentPage === index + 1 ? "outline" : "ghost"}
                onClick={() => dispatch(goClickedPage(index + 1))}
                aria-label="Change pagination index"
              >
                {index + 1}
              </Button>
            );
          })}
          <IconButton
            aria-label="Next paginated List"
            icon="chevron-right"
            variantColor="gray.900"
            _hover={{ fontSize: "lg" }}
            variant="ghost"
            onClick={() => dispatch(goNextPage())}
            disabled={currentPage === Math.ceil(listOfPages?.length / 5)}
          />
        </Flex>
      ) : null}
    </>
  );
};

export default PaginationList;
