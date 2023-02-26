import React from 'react';
import { AboutMeSection, CoverSection, FindMe, Footer, Navbar, ProjectSection} from './components';
import {
  ChakraProvider,
  Box,
  Grid,
} from '@chakra-ui/react';

function App() {
  return (
    <ChakraProvider>
      <Box textAlign="center" fontSize="xl" bg="gray.900" color="whiteAlpha.700">
        <Grid minH="100vh">
          <Navbar />
          <CoverSection />
          <AboutMeSection />
          <ProjectSection />
          <FindMe />
          <Footer />
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default App;
