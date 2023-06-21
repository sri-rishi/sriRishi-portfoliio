import {
  Box,
  Heading,
  Text,
  Stack,
  Flex,
  Image,
  Button,
} from '@chakra-ui/react';
import {
  ecommerceAppPreview,
  socialMediaPreview,
} from '../../assets/images/images';

const Projects = () => {
  return (
    <>
      <Box
        marginTop={['5rem', '6rem', '10rem', '5rem']}
        width="100%"
        minHeight="100vh"
        padding={['1rem', '1rem', '1rem', '1rem 4rem']}
      >
        <Stack marginTop="4rem">
          <Heading as="h2" size="2xl">
            My Work
          </Heading>
          <Text>Here are a few projects that I've worked on.</Text>
        </Stack>
        <Flex marginTop="2rem">
          <Box
            width="100%"
            maxWidth="20rem"
            minHeight="30rem"
            display="flex"
            flexDir="column"
            alignItems="center"
            background="gray.800"
            padding="1rem"
            borderRadius="2xl"
          >
            <Box
              width="100%"
              height="50%"
              display="flex"
              justifyContent="center"
              objectFit="cover"
              borderRadius="inherit"
              padding="1rem 0"
            >
              <Image
                src={socialMediaPreview}
                alt="Rishi Srivastava"
                boxSize="100%"
                borderRadius="inherit"
              />
            </Box>
            <Box
              width="100%"
              height="50%"
              display="flex"
              flexDir="column"
              justifyContent="center"
              textAlign="left"
            >
              <Stack spacing="2rem">
                <Box>
                  <Heading size="md" fontSize="1.8rem">
                    Project Name
                  </Heading>
                  <Text as="p" fontSize="1rem">
                    SocioFlasher is a social media app like Twitter that let
                    users connect and share there thoughts. Visit app and
                    connect with each other
                  </Text>
                </Box>
                <Box
                  display="flex"
                  justifyContent="flex-end"
                  alignItems="cener"
                  gap="1rem"
                >
                  <Button
                    as="a"
                    href="https://nakshatra-cliq.netlify.app/"
                    target="_blank"
                    variant="solid"
                    colorScheme="blue"
                  >
                    Live
                  </Button>
                  <Button
                    as="a"
                    href="https://github.com/sri-rishi/nakshatra-cliq-ecomm"
                    target="_blank"
                    variant="outline"
                    colorScheme="blue"
                  >
                    Source Code
                  </Button>
                </Box>
              </Stack>
            </Box>
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default Projects;
