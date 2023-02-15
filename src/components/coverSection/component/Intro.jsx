import Typewriter from 'typewriter-effect';
import {Box, Text, Heading} from "@chakra-ui/react"

const Intro = () => {
    return (
        <Box 
            textAlign="left"
            width={["100%", "100%", "80%", "50%"]}
            display="flex"
            flexDir="column"
            justifyContent="center"
            gap="1rem"
            padding="2rem"
            letterSpacing="2px"
        >
            <Text 
                as="p" 
                fontSize="2rem"
                fontWeight="bold"
            >
                Hello, 
            </Text>
            <Heading 
                as="h1"
                color="purple.600"  
                size={["xl", "xl", "2xl", "3xl"]}
            >   
                <Text 
                    as="span"
                    color="whiteAlpha.600"
                >
                    I'm&nbsp;
                </Text>
                Rishi Srivastava
            </Heading>
            <Box
                fontWeight="bold"
                fontSize={["2xl", "2xl", "3xl", "4xl"]}
                color="pink.600"
            >
                <Typewriter
                    options={{
                        strings: [
                        "Frontend Developer",
                        "Technical Blogger",
                        "OSS Contributor",
                        ],
                        autoStart: true,
                        loop: true,
                        deleteSpeed: 50,
                    }}
                />
            </Box>
            <Text
                as="p"
            >
                I have a passion for technology
            </Text>
        </Box>
    )
}

export default Intro;