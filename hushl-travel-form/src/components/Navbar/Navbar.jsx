import React, { useEffect, useState } from "react";
import { Box, Tabs, Tab, Flex } from "@chakra-ui/react";
import { Link } from 'react-scroll';

const tabData = [
  { label: "Property Data", href: "propertyInformation" },
  { label: "Health And Security", href: "healthSafety" },
  { label: "Beach", href: "beach" },
  { label: "Reef", href: "reef" },
  { label: "Gym", href: "gym" },
  { label: "Kids Club", href: "kidsClub" },
  { label: "Food & Beverage", href: "foodAndBeverage" },
  { label: "Services", href: "services" },
  { label: "Pool", href: "pool" },
  { label: "Rooms", href: "rooms" },
];

const NavBar = () => {
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Calculate dynamic font size and height based on window dimensions
  const fontSize = Math.min(24, dimensions.width / 50); // Adjust the 50 factor as needed
  const tabHeight = dimensions.height / 12;

  return (
    <Box
      p={4}
      boxShadow="md"
      bg="brand.500"
      color="black"
      position="fixed"
      width={"100%"}
      zIndex={999}
      bgColor="#f7e705"
      h={tabHeight - 15}
      mt={-2}
    >
      <Tabs isFitted variant="enclosed">
        <Flex
          flexDir="row"
          justifyContent="space-around"
          alignItems="center"
          width="100%"
          h={tabHeight - 46} // Adjusted for better visual balance
        >
          {tabData.map((tab, index) => (
            <Link
              key={index}
              to={tab.href}
              smooth={true}
              offset={-tabHeight} 
              duration={400}
            >
              <Tab fontSize={fontSize - 5} _hover={{ bg: "pink.600" }}>
                {tab.label}
              </Tab>
            </Link>
          ))}
        </Flex>
      </Tabs>
    </Box>
  );
};

export default NavBar;
