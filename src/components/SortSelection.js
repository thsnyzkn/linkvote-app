import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { selectLinks } from "../features/linkList/linkSlice";
import { Box, Select } from "@chakra-ui/react";
import { TriangleDownIcon } from "@chakra-ui/icons";

const SortSelection = ({ sortByChoice }) => {
  const dispatch = useDispatch();
  const listOfLinks = useSelector(selectLinks);
  const sortOption = listOfLinks?.sortOption;
  return (
    <Box maxW="50%">
      <Select
        placeholder="Order by"
        defaultValue={sortOption}
        icon={<TriangleDownIcon />}
        onChange={(event) =>
          dispatch(sortByChoice(event.target.value || "createdDate"))
        }
      >
        <option value="mostVoted">Most Voted(Z→A)</option>
        <option value="lessVoted">Less Voted(A→Z)</option>
      </Select>
    </Box>
  );
};

SortSelection.propTypes = { sortByChoice: PropTypes.func.isRequired };
export default SortSelection;
