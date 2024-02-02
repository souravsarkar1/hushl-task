import { Box, Flex } from '@chakra-ui/react';
import './App.css';
import NavBar from './components/Navbar/Navbar';
import AllRoutes from './routes/AllRoutes';

function App() {
  return (
    <Flex columnGap={"10px"} flexDirection={"column"} className="App">
      <Box >
        <NavBar />
      </Box>
      <Box mt={15} >
        <AllRoutes />
      </Box>
    </Flex>
  );
}

export default App;
