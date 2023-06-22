import { Box, Button, Flex, HStack, Heading, Spacer,Text } from "@chakra-ui/react";


export default function Navbar() {
  return (
    <Flex as="nav" p="10px" alignItems="center">
        <Heading as='h1'>MyBrand</Heading>
        <Spacer />
        <HStack spacing='20px'>
            <Box bg='green.200' p='10px'>M</Box>
            <Text>charaf@emsi.no</Text>
            <Button colorScheme="purple">Logout</Button>
        </HStack>
    </Flex>
  )
}
