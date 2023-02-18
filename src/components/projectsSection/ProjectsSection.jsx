import { Box, Stack, Text, Heading } from "@chakra-ui/react";
import { projects } from "./projectSectionData";
import ProjectCard from "./ProjectCard";

const ProjectSection = () => {
    return (
        <Box
            padding={["0 1rem", "0 1rem", "0 6rem","0 6rem"]}
            textAlign={["center", "center", "left", "left"]}
            minHeight="100vh"
            width={["100%", "100%", "100%", "100%"]}
            letterSpacing="2px"
            display="flex"
            flexDir="column"
            gap="4rem"
            alignItems={["center", "center", "flex-start", "flex-start"]}
            justifyContent="center"
        >
            <Stack>
                <Text
                    as="p"
                    fontSize="2xl"
                    fontWeight="bold"
                >
                    Some of my
                </Text>
                <Heading
                    as="h2"
                    size="2xl"
                >
                    Projects
                </Heading>
            </Stack>
            <Box
                width= "100%"
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                flexWrap="wrap"
            >
                {
                    projects.map((project) => (
                        <ProjectCard key={project.id} project={project}/>
                    ))
                }
            </Box>
        </Box>
    )
}

export default ProjectSection;