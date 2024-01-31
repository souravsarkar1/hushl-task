import React from "react";
import { Box, Tabs, Tab, Flex } from "@chakra-ui/react";

const tabData = [
  { label: "Property Data", href: "#propertyInformation" },
  { label: "Health And Security", href: "#healthSafety" },
  { label: "Beach", href: "#beach" },
  { label: "Transfer Options", href: "#transferOptions" },
  { label: "Reef", href: "#reef" },
  { label: "Gym", href: "#gym" },
  { label: "Kids Club", href: "#kidsClub" },
  { label: "Food & Beverage", href: "#food&Beverage" },
  { label: "Services", href: "#services" },
  { label: "Rooms", href: "#rooms" },
];

const NavBar = () => {
  const width = window.innerWidth;
  const height = window.innerHeight;

  // Calculate dynamic font size and height based on window dimensions
  const fontSize = Math.min(24, width / 50); // Adjust the 50 factor as needed
  const tabHeight = height / 12;

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
      h={tabHeight-15}
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
            <a key={index} href={tab.href}>
              <Tab fontSize={fontSize-5} _hover={{ bg: "pink.600" }}>
                {tab.label}
              </Tab>
            </a>
          ))}
        </Flex>
      </Tabs>
    </Box>
  );
};

export default NavBar;
