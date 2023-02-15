import React from 'react';
import {
  ChakraProvider,
  Box,
  Grid,
} from '@chakra-ui/react';
import { CoverSection, Navbar} from './components';

function App() {
  return (
    <ChakraProvider>
      <Box textAlign="center" fontSize="xl" bg="gray.900">
        <Grid minH="100vh">
          <Navbar />
          <CoverSection />
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default App;
