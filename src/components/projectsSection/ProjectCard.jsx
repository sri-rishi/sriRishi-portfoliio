import { Stack, Text, Heading, Card, CardBody, Image, Box, transition} from "@chakra-ui/react"
import { motion } from "framer-motion";

const ProjectCard = ({project}) => {
    const {
        projectName,
        description,
        coverImage,
        liveLink
    } = project
    return(
        <Card 
            as={motion.div}
            maxW='xs'
            boxShadow="2xl"
            background="whiteAlpha.800"
            color="gray.900"
            drag='x'
            dragConstraints={{ left: -100, right: 100 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition='0.5s linear'
        >
            <CardBody>
                <Image
                    src={coverImage && coverImage}
                    alt={`${projectName && projectName} preview`}
                    borderRadius='lg'
                />
                <Stack 
                    mt='6' 
                    spacing='3'
                >
                    <Heading size='md'>{projectName && projectName}</Heading>
                    <Text fontSize="sm" fontWeight="semibold" letterSpacing="1px">
                        {description && description} 
                    </Text>
                </Stack>
            </CardBody>
        </Card>
    )
}

export default ProjectCard;