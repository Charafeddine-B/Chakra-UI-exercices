import { Heading,Text,Box,Container, SimpleGrid } from "@chakra-ui/react";

export default function Dashboard() {
  const BoxStyles= {
    p:"10px",
    bg:"purple.400",
    color:"white",
    m:"10px",
    textAlign:"center",
    ':hover':{
      color:'black',
      bg:'blue.200'
    }


  }
  return (

    <SimpleGrid p="10px" spacing={10} minChildWidth={'250px'}>
      <Box h="200px" bg="white" border='1px solid'></Box>
      <Box h="200px" bg="white" border='1px solid'></Box>
      <Box h="200px" bg="white" border='1px solid'></Box>
      <Box h="200px" bg="white" border='1px solid'></Box>

      <Box h="200px" bg="white" border='1px solid'></Box>
      <Box h="200px" bg="white" border='1px solid'></Box>
      <Box h="200px" bg="white" border='1px solid'></Box>
      <Box h="200px" bg="white" border='1px solid'></Box>

      <Box h="200px" bg="white" border='1px solid'></Box>
      <Box h="200px" bg="white" border='1px solid'></Box>
      <Box h="200px" bg="white" border='1px solid'></Box>
      <Box h="200px" bg="white" border='1px solid'></Box>
    </SimpleGrid>
    // <Container as='section' maxWidth="1080px" py="20px">
    //   <Heading my="30px" p="10px">Chakra Ui Components</Heading>
    //   <Text ml="30px">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est, rem omnis quod alias impedit nemo!</Text>
    //   <Text ml="30px" color="blue.300" fontWeight="bold">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est, rem omnis quod alias impedit nemo!</Text>

    //   <Box my="30px" p="20px" bg="orange">
    //     <Text color="white">This is a box</Text>
    //   </Box>

    //   <Box sx={BoxStyles}>
    //     <Text>Hello , Devs</Text>
    //   </Box>

    // </Container>
  )
}
