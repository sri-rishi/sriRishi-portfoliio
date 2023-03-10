import { Box, Button, Stack, Text } from '@chakra-ui/react';

const ConnectBox = () => {
  return (
    <Box
      width="100%"
      minHeight="50vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      padding={['4rem 1rem', '4rem 1rem', '0 6rem', '0 6rem']}
    >
      <Box
        width={['100%', '60%']}
        background="gray.800"
        padding="2rem"
        display="flex"
        flexDir="column"
        alignItems="center"
        justifyContent="center"
        gap="2rem"
        borderRadius="3xl"
        boxShadow="lg"
      >
        <Stack>
          <Text as="p" fontSize="1.5rem">
            Want to hire me
          </Text>
          <Text as="p" fontSize="4xl" fontWeight="bold">
            Let me help you
          </Text>
        </Stack>
        <Button size="lg" width="10rem" fontSize="1.5rem" colorScheme="teal">
          Contact Me
        </Button>
      </Box>
    </Box>
  );
};

export default ConnectBox;
