import { Box, Flex, Text, IconButton } from "@chakra-ui/react";
import {AiOutlineGithub, AiOutlineTwitter, FaLinkedinIn} from "../../assets/icons"

const FindMe = () => {
    return (
        <Box
            width="100%"
            height="20vh"
            letterSpacing="2px"
            display="flex"
            flexDir="column"
            alignItems="center"
            justifyContent="center"
            gap="2rem"
        >
            <Box
            >
                <Text
                    as="p"
                    fontSize="4xl"
                    fontWeight="bold"
                >
                    Find me on 
                </Text>
                <Text
                    as="p"
                    fontSize="2xl"
                    fontWeight="bold"
                >
                    Feel free to <Text as="span">connect</Text> with me
                </Text>
            </Box>
            <Flex
                alignItems="center"
                justifyContent="center"
                gap="2rem"
            >
                <IconButton
                    as="a" 
                    target="_blank" 
                    href="https://www.linkedin.com/in/sri-rishi/"
                    size="lg"
                    fontSize="1.4rem"
                    colorScheme="blue"
                    icon={<FaLinkedinIn/>}
                    _hover={{
                        transform: "translateY(8px)",
                        boxShadow: "dark-lg"
                    }}
                />
                <IconButton
                    as="a" 
                    target="_blank" 
                    href="https://github.com/sri-rishi"
                    size="lg"
                    fontSize="1.4rem"
                    colorScheme="blue"
                    icon={<AiOutlineGithub />}
                    _hover={{
                        transform: " translateY(8px)",
                        boxShadow: "dark-lg"
                    }}
                />
                <IconButton
                    as="a" 
                    target="_blank" 
                    href="https://twitter.com/sri26_rishi"
                    size="lg"
                    fontSize="1.4rem"
                    colorScheme="blue"
                    icon={<AiOutlineTwitter />}
                    _hover={{
                        transform: " translateY(8px)",
                        boxShadow: "dark-lg"
                    }}
                />
            </Flex>
        </Box>
    )
} 

export default FindMe;