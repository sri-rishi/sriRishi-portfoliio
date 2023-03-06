import { Box, Text, Flex, Image, keyframes} from "@chakra-ui/react"
import { motion } from "framer-motion";
import { personWorking } from "../../../../assets/images/images";

const MyIntro = () => {
    const animateKeyframes = keyframes`
     0%{transform: translate3d(0, 0, 0)}
     50%{transform: translate3d(0, 20px, 0)}
    ` 
    const animationForImage = `${animateKeyframes} 5s alternate ease-in-out infinite`;

    return(
        <Box
            marginTop={["5rem", "6rem", "10rem", "5rem"]}
            width="100%"
            minHeight="100vh"
            padding={["1rem", "1rem", "1rem", "1rem 4rem"]} 
        >
            <Flex
                w="100%"
                height="100%"
                flexDirection={["column-reverse","column-reverse", "column-reverse", "row"]}  
                alignItems="center"
                justifyContent={["center", "center", "space-around", "space-around"]}
            >
                <Box
                    textAlign={["center", "center", "left", "left"]}
                    width={["100%", "100%", "80%", "40%"]}
                    display="flex"
                    flexDir="column"
                    alignItems={["center", "center", "flex-start", "flex-start"]}
                    justifyContent="center"
                    gap="1rem"
                    letterSpacing="2px"
                >
                    <Text
                        as="p"
                        fontSize="4xl"
                        fontWeight="bold"
                    >
                        Hi There
                    </Text>
                    <Text>
                        I'm <Text as="span" color="pink.600" fontWeight="bold">Rishi Srivastava </Text> from India. I'm in final year of BSc at Prof. Rajendra Singh (Rajju Bhaiya) University, Prayagraj. 
                    </Text>
                    <Text>
                        I started polishing my web dev skills and developed 5 projects using React, Typescript and HTML/CSS. Being comfortable with code allows me to rapidly prototype and validate experiences.
                    </Text>
                </Box>
                <Box 
                    as={motion.div}
                    animation={animationForImage}
                    width={[ "100%", "80%", "80%","40%"]}
                    display="flex"
                    justifyContent="center"
                >
                    <Image 
                        src={personWorking} 
                        alt="Rishi Srivastava" 
                        boxSize="100%"
                    />
                </Box>
            </Flex>
        </Box>
    )
}

export default MyIntro;