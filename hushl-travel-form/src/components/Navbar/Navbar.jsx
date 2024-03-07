import React, { useEffect, useState } from "react";
import { Box, Tabs, Tab, Flex } from "@chakra-ui/react";
import { Link } from 'react-scroll';
import { VscSymbolProperty } from "react-icons/vsc";
import { MdOutlineHealthAndSafety } from "react-icons/md";
import { FaUmbrellaBeach } from "react-icons/fa";
import { GiCoral } from "react-icons/gi";
import { MdSportsGymnastics } from "react-icons/md";
import { FaChild } from "react-icons/fa";
import { FaBowlFood } from "react-icons/fa6";
import { FaServicestack } from "react-icons/fa6";
import { MdOutlinePool } from "react-icons/md";
import { FaHouseUser } from "react-icons/fa";
import { MdPermMedia } from "react-icons/md";
import { MdEmojiTransportation } from "react-icons/md";
import { MdOutlineSportsMartialArts } from "react-icons/md";

const tabData = [
  { label: <VscSymbolProperty color="blue" />, text: "Property", href: "propertyInformation" },
  { label: <MdOutlineHealthAndSafety color="blue" />, text: "Health", href: "healthSafety" },
  { label: <FaUmbrellaBeach color="blue" />, text: "Beach", href: "beach" },
  { label: <MdOutlineSportsMartialArts color="blue"/>, text: "Aquamotion", href: "waterSports" },
  { label: <MdEmojiTransportation color="blue"/>, text: "Transportation", href: "transferOptions" },
  { label: <GiCoral color="blue" />, text: 'Reef', href: "reef" },
  { label: <MdSportsGymnastics color="blue"/>, text: "Gym", href: "gym" },
  { label: <FaChild color="blue"/>, text: "Kids", href: "kidsClub" },
  { label: <FaBowlFood color="blue"/>, text: "Food", href: "foodAndBeverage" },
  { label: <FaServicestack color="blue"/>, text: "Services", href: "services" },
  { label: <MdOutlinePool color="blue"/>, text: "Pool", href: "pool" },
  { label: <FaHouseUser color="blue"/>, text: "Rooms", href: "rooms" },
  { label: <MdPermMedia color="blue"/>, text: "Media", href: "media" },
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
      mt={-5}
    >
      <Tabs isFitted variant="enclosed">
        <Flex
          flexDir="row"
          justifyContent="space-between"
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
                <Flex align="center">
                  {tab.label}
                  <Box ml={2}>{tab.text}</Box>
                </Flex>
              </Tab>
            </Link>
          ))}
        </Flex>
      </Tabs>
    </Box>
  );
};

export default NavBar;
