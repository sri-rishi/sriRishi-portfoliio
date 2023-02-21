import React from 'react';
import {
  ChakraProvider,
  Box,
  Grid,
} from '@chakra-ui/react';
import { AboutMeSection, CoverSection, Footer, Navbar, ProjectSection} from './components';

function App() {
  return (
    <ChakraProvider>
      <Box textAlign="center" fontSize="xl" bg="gray.900" color="whiteAlpha.700">
        <Grid minH="100vh">
          <Navbar />
          <CoverSection />
          <AboutMeSection />
          <ProjectSection />
          <Footer />
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default App;
