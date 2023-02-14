import React from "react";
import { Box, Flex, Heading, Text} from "@chakra-ui/react"
import { ProfileImageBox } from "./component";
import Typewriter from 'typewriter-effect';


const CoverSection = () => {
    return(
        <Flex
            width="100%"
            minHeight="100vh"
            flexDirection={["column-reverse","column-reverse", "row", "row"]}  
            alignItems="center"
            justifyContent={["center", "center", "space-around", "space-around"]}
            padding={["1rem", "1rem", "2rem", "2rem"]}
        >
            <Box 
                textAlign="left"
                width="50%"
            >
                <Text>
                    Hello, I am 
                </Text>
                <Heading as="h1" size="2xl">
                    Rishi Srivastava
                </Heading>
                <Box
                    fontWeight="bold"
                    fontSize="6xl"
                    color="purple.600"
                >
                    <Typewriter
                        options={{
                            strings: [
                            "Developer",
                            "Frontend Developer",
                            "Open Source Contributor",
                            ],
                            autoStart: true,
                            loop: true,
                            deleteSpeed: 50,
                        }}
                    />
                </Box>
            </Box>
            <ProfileImageBox />
        </Flex>
    )
}

export default CoverSection;