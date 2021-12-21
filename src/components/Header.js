import { Stack, Flex, Image, Divider, Text } from "@chakra-ui/react";

import hepsiburadaLogo from "../assets/images/hepsiburada.png";

const Header = () => (
  <Stack px={100} mt={10}>
    <Flex
      directon="column"
      justifyContent="space-between"
      align="center"
      as="header"
    >
      <Image src={hepsiburadaLogo} alt="hepsiburada logo" />
      <Flex>
        <Text fontWeight="bold">Link</Text>
        <Text>VOTE</Text>
        <Text ml={2}>Challenge</Text>
      </Flex>
    </Flex>
    <Divider />
  </Stack>
);

export default Header;
