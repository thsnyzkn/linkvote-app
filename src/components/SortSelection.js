import { Box, Select } from "@chakra-ui/react";
import { TriangleDownIcon } from "@chakra-ui/icons";

const SortSelection = ({ sortByChoice }) => {
  return (
    <Box maxW="50%">
      <Select placeholder="Order by" icon={<TriangleDownIcon />}>
        <option value="mostVoted">Most Voted(Z→A)</option>
        <option value="lessVoted">Less Voted(A→Z)</option>
      </Select>
    </Box>
  );
};

export default SortSelection;
