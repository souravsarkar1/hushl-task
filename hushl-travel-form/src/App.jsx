import { Box, Flex } from '@chakra-ui/react';
import './App.css';
// import NavBar from './components/Navbar/Navbar';
import AllRoutes from './routes/AllRoutes';
import { motion, useScroll } from "framer-motion"

function App() {
  const { scrollYProgress } = useScroll();

  return (
    <Flex columnGap={"10px"} flexDirection={"column"} className="App">
      <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      />
      <Box mt={15} >
        <AllRoutes />
      </Box>
    </Flex>
  );
}

export default App;
