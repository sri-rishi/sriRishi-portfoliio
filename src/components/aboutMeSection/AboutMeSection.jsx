import { Box, Heading, Stack, Text, Button } from "@chakra-ui/react";

const AboutMeSection = () => {
    return(
        <Box
            padding="0 6rem"
            textAlign="left"
            minHeight="90vh"
            width="60%"
            letterSpacing="2px"
            display="flex"
            flexDir="column"
            gap="2rem"
            justifyContent="center"
        >   
            <Stack
                spacing="8"
            >
                <Stack>
                    <Text
                        as="p"
                        fontSize="2xl"
                        fontWeight="bold"
                    >
                        A little bit
                    </Text>
                    <Heading
                        as="h2"
                        size="2xl"
                    >
                        About Me
                    </Heading>
                </Stack>

                <Stack
                    spacing="3" 
                >
                    <Text 
                        as="p"
                        size="xl"
                        fontWeight="semibold"
                    >
                        Hi there,
                    </Text>
                    <Text>
                        I am a Frontend Developer and have worked with emerging tech stacks like React, Typescript, JavaScript, Redux, NodeJS and Express. I continuously learn new things and love building applications to scale.
                    </Text>
                </Stack>
            </Stack>
            <Stack 
                direction="row"
                spacing="4"
            >
                <Button 
                    colorScheme="teal"
                    variant="solid"
                >
                    Work
                </Button>
                <Button
                    colorScheme="teal"
                    variant="outline"
                >
                    Read More
                </Button>
            </Stack>
        </Box>
    )
}

export default AboutMeSection;