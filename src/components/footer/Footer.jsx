import { Box, Flex, IconButton, Text, Icon } from "@chakra-ui/react";
import {AiOutlineGithub, AiOutlineTwitter, FaLinkedinIn, MdCopyright} from "../../assets/icons";

const Footer = () => {
    return(
        <Box
            w="full"
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            padding={["1.5rem", "1.5rem 4rem", "1.5rem 4rem"]}
            background="gray.800"
            marginTop="8rem"
        >
            <Flex
                alignItems="center"
                gap="8px"
            >
                <Icon 
                    as={MdCopyright}
                />
                <Text as="span" fontSize="md">
                    Rishi Srivastava
                </Text>
            </Flex>
            
            <Flex
                alignItems="center"
                justifyContent="center"
                gap="2rem"
            >
                <IconButton
                    as="a" 
                    target="_blank" 
                    href="https://www.linkedin.com/in/sri-rishi/"
                    size="sm"
                    fontSize="1rem"
                    colorScheme="gray"
                    icon={<FaLinkedinIn />}
                    _hover={{
                        boxShadow: "dark-lg"
                    }}
                />
                <IconButton
                    as="a" 
                    target="_blank" 
                    href="https://github.com/sri-rishi"
                    size="sm"
                    fontSize="1rem"
                    colorScheme="gray"
                    icon={<AiOutlineGithub />}
                    _hover={{
                        boxShadow: "dark-lg"
                    }}
                />
                <IconButton
                    as="a" 
                    target="_blank" 
                    href="https://twitter.com/sri26_rishi"
                    size="sm"
                    fontSize="1rem"
                    colorScheme="gray"
                    icon={<AiOutlineTwitter />}
                    _hover={{
                        boxShadow: "dark-lg"
                    }}
                />
            </Flex>
        </Box>
    )
}

export default Footer