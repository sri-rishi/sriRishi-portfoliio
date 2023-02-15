import Typewriter from 'typewriter-effect';
import {Box, Text, Heading, Button, Stack} from "@chakra-ui/react";
import RishiCV from "../../../assets/files/Rishi_CV.pdf"
import DownloadLink from 'react-download-link';
import{ AiOutlineDownload } from "react-icons/ai";

const Intro = () => {
    return (
        <Box 
            textAlign="left"
            width={["100%", "100%", "80%", "50%"]}
            display="flex"
            flexDir="column"
            justifyContent="center"
            gap="1rem"
            padding="2rem 0"
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
            <Stack 
               direction="row"
               spacing="4"
               marginTop="2rem"
            >
                <Button colorScheme="teal">Contact</Button>
                <Button color="gray.900" leftIcon={<AiOutlineDownload />} colorScheme="pink" variant='solid'>
                    <DownloadLink
                        style={{color: "#20262E"}}
                        label="Resume"
                        filename="Rishi_CV.pdf"
                        exportFile={() => RishiCV}
                    />
                </Button>
            </Stack>
        </Box>
    )
}

export default Intro;