import { Box, Flex, Link, Button, Image } from "@chakra-ui/react";

export default function Header() {
  return (
    <Flex
      as="header"
      position="sticky"
      top="0"
      bg="black"
      color="white"
      p="4"
      align="center"
      justify="space-between"
      zIndex={1}
    >
      <Box>
        <Image src="/images/TaurosDAO-logo.png" width="300px" height="auto" alt="TaurosDAO Logo" />
      </Box>
      <Box>
        <Link p="2" href="/members">Members</Link>
        <Link p="2" href="/services">Services</Link>
        <Link p="2" href="/governance">Governance</Link>
        <Link p="2" href="/galleries">Galleries</Link>
        <Link p="2" href="/blog">Blog</Link>
      </Box>
      <Button colorScheme="teal">Connect</Button>
    </Flex>
  );
}

