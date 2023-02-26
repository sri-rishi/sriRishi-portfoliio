import { Box, Stack, Text, Heading, Grid, GridItem } from "@chakra-ui/react";
import { projects } from "./projectSectionData";
import ProjectCard from "./ProjectCard";

const ProjectSection = () => {
    return (
        <Box
            padding={["4rem 1rem", "4rem 1rem", "0 6rem","0 6rem"]}
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
            <Grid
                width="100%"
                templateColumns={['repeat(1, 1fr)', 'repeat(1, 1fr)', 'repeat(2, 1fr)','repeat(3, 1fr)']} 
                gap={6}
            >
                {
                    projects.map((project) => (
                        <GridItem key={project.id} display="grid" w='100%' justifyContent="center" alignItems="center">
                            <ProjectCard project={project} />
                        </GridItem>
                    ))
                }
            </Grid>
        </Box>
    )
}

export default ProjectSection;