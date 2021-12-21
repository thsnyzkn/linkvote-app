import { useDispatch } from "react-redux";
import { Box, Select } from "@chakra-ui/react";
import { TriangleDownIcon } from "@chakra-ui/icons";

const SortSelection = ({ sortByChoice }) => {
  const dispatch = useDispatch();
  return (
    <Box maxW="50%">
      <Select
        placeholder="Order by"
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

export default SortSelection;
