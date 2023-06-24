import { Heading,Text,Box,Container, SimpleGrid, Card, CardBody, CardHeader, CardFooter, Flex } from "@chakra-ui/react";
import { useLoaderData } from "react-router-dom";

export default function Dashboard() {

  const tasks = useLoaderData()
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

    <SimpleGrid spacing={10} minChildWidth={'300px'}>
    {tasks && tasks.map(task =>(
      
      <Card key={task.id}>
        <CardHeader>
          <Flex>
            <Box w="50px" h="50px">
            <Text>AV</Text>
            </Box>
            <Box>
              <Heading as ="h3" size="sm">{task.title}</Heading>
              <Text>by {task.author}</Text>
            </Box>
          </Flex>
        </CardHeader>
        <CardBody color="gray.500">
        {task.description}
        </CardBody>
        <CardFooter>

        </CardFooter>
      </Card>
    ))}

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

export  const taskLoader = async () =>{
const res = await fetch('http://localhost:9000/tasks')
return res.json()
}
