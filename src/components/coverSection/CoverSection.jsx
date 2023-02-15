import React from "react";
import { Box, Flex} from "@chakra-ui/react"
import { Intro, ProfileImageBox } from "./component";

const CoverSection = () => {
    return(
        <Box
            marginTop={["5rem", "6rem", "10rem", "5rem"]}
            width="100%"
            minHeight="100vh"
            padding={["1rem", "1rem", "1rem", "4rem"]}
        >
            <Flex
                w="100%"
                height="100%"
                flexDirection={["column-reverse","column-reverse", "column-reverse", "row"]}  
                alignItems="center"
                justifyContent={["center", "center", "space-around", "space-around"]}
            >
                <Intro />
                <ProfileImageBox />
            </Flex>
        </Box>
    )
}

export default CoverSection;