import { Box, Card,Heading, CardBody, Text} from "@chakra-ui/react";
import { skillsData } from "./skillsData";


const Skills = () => {
    return(
        <Box
            padding={["4rem 1rem", "4rem 1rem", "0 6rem","0 6rem"]}
            textAlign={["center", "center", "left", "left"]}
            minHeight="50vh"
            width={["100%", "100%", "100%", "100%"]}
            letterSpacing="2px"
            display="flex"
            flexDir="column"
            gap="4rem"
            alignItems={["center", "center", "flex-start", "flex-start"]}
            justifyContent="center"
        >
            <Heading>
                Skills
            </Heading>
            <Box 
                display="flex"
                width="100%"
                flexWrap="wrap"
                gap="1rem"
            >
                {
                    skillsData.map(({id, name}) => (
                        <Card 
                            key={id}
                            background="gray.800"
                            color="whiteAlpha.900"
                            position="relative"
                            boxShadow="2xl"
                            _hover={{
                                boxShadow:"dark-lg",
                                transform: "scale(1.1)"
                            }}
                        >
                            <CardBody>
                                <Text>{name}</Text>
                            </CardBody>
                        </Card>  
                    ))
                } 
            </Box>
        </Box>
    )
}

export default Skills;