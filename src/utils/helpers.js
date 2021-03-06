const PAGINATION_LIMIT = 5;

export const paginateContent = (links, currentPage) => {
  return [...links].slice(
    (currentPage - 1) * PAGINATION_LIMIT,
    currentPage * PAGINATION_LIMIT
  );
};
export const sortLinks = (linkList) => {
  const { sortOption, links } = linkList;
  let sortedList = [];
  if (sortOption === "createdDate") {
    sortedList = [...links].sort(function (first, second) {
      if (first.points === second.points) {
        if (first.updatedDate) {
          return first.updatedDate < second.updatedDate ? 1 : -1;
        } else {
          return first.createdDate < second.createdDate ? 1 : -1;
        }
      }
      return first.points < second.point ? 1 : -1;
    });
  } else if (sortOption === "mostVoted") {
    sortedList = [...links].sort(function (first, second) {
      if (first.points === second.points) {
        return first.updatedDate < second.updatedDate ? 1 : -1;
      } else {
        return first.points < second.points ? 1 : -1;
      }
    });
  } else if (sortOption === "lessVoted") {
    sortedList = [...links].sort((first, second) =>
      first.points === second.points
        ? first.updatedDate < second.updatedDate
          ? 1
          : -1
        : first.points > second.points
        ? 1
        : -1
    );
  }

  return sortedList;
};
