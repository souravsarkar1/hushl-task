import React, { useState } from 'react';
import {
  IconButton,
  Box,
  CloseButton,
  Flex,
  Icon,
  useColorModeValue,
  Text,
  Drawer,
  DrawerContent,
  useDisclosure,
  Button,
} from '@chakra-ui/react';
import { FiMenu } from 'react-icons/fi';
import { FaHotel, FaHouseUser, FaUmbrellaBeach } from 'react-icons/fa';
import { CiLocationOn } from 'react-icons/ci';
import PropertyInformationOnHotelHome from '../HotelHome/PropertyInfromation';
import BeachOnHotelHome from '../HotelHome/Beach';
import {
  MdCleaningServices,
  MdEmojiTransportation,
  MdHealthAndSafety,
  MdOutlinePool,
  MdOutlineSportsGymnastics,
  MdPermMedia,
} from 'react-icons/md';
import { FaChildren, FaPersonSwimming } from 'react-icons/fa6';
import { GiCoral } from 'react-icons/gi';
import { IoFastFood } from 'react-icons/io5';
import LocationCardOnHotelHome from '../HotelHome/Location';
import HealthAndSeaftyOnHotelHome from '../HotelHome/HealthAndSeafty';
import WaterSportsOnHotelHome from '../HotelHome/WaterSports';
import ReefOnHotelHome from '../HotelHome/Reef';
import GYMOnHotelHome from '../HotelHome/GYM';
import KidsClubOnHotelHome from '../HotelHome/KidsClub';
import FoodAndBeverageOnHotelHome from '../HotelHome/FoodAndBeverage';
import ServicesOnHotelHome from '../HotelHome/Services';
import PoolOnHotelHome from '../HotelHome/Pool';
import RoomOnHotelHome from '../HotelHome/Room';
import { useDispatch } from 'react-redux';
import { hotelLogout } from '../../redux/User/action';
import { useNavigate } from 'react-router-dom';
import TransportationOnHotelHome from '../HotelHome/Transportation';
const LinkItems = [
  { name: 'Property', icon: FaHotel },
  { name: 'Location', icon: CiLocationOn },
  { name: 'Beach', icon: FaUmbrellaBeach },
  { name: 'Healt Data', icon: MdHealthAndSafety },
  { name: 'Transportation', icon: MdEmojiTransportation },
  { name: 'Aquamotion', icon: FaPersonSwimming },
  { name: 'Reef', icon: GiCoral },
  { name: 'GYM', icon: MdOutlineSportsGymnastics },
  { name: 'Kids Club', icon: FaChildren },
  { name: 'Food & Beverage', icon: IoFastFood },
  { name: 'Services', icon: MdCleaningServices },
  { name: 'Pool', icon: MdOutlinePool },
  { name: 'Room', icon: FaHouseUser },
  { name: 'Media', icon: MdPermMedia },
];

export default function Sidebar({ hotelData }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedNavItem, setSelectedNavItem] = useState('Property');

  const handleNavItemClick = itemName => {
    setSelectedNavItem(itemName);
    onClose();
  };

  return (
    <Box minH="100vh" bg={useColorModeValue('gray.100', 'gray.900')}>
      <SidebarContent
        onClose={onClose}
        handleNavItemClick={handleNavItemClick}
        selectedNavItem={selectedNavItem}
        display={{ base: 'none', md: 'block' }}
      />
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <SidebarContent onClose={onClose} handleNavItemClick={handleNavItemClick} selectedNavItem={selectedNavItem} />
        </DrawerContent>
      </Drawer>
      <MobileNav display={{ base: 'flex', md: 'none' }} onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }} p="4">
        {selectedNavItem === 'Property' && (
          <PropertyInformationOnHotelHome id={hotelData._id} propertyInformation={hotelData.propertyInformation} />
        )}
        {selectedNavItem === 'Location' && <LocationCardOnHotelHome id={hotelData._id} location={hotelData.location} />}
        {selectedNavItem === 'Beach' && <BeachOnHotelHome id={hotelData._id} beach={hotelData.beach} />}
        {selectedNavItem === 'Healt Data' && (
          <HealthAndSeaftyOnHotelHome id={hotelData._id} healthSafety={hotelData.healthSafety} />
        )}
        {selectedNavItem === 'Transportation' && (
          <TransportationOnHotelHome id={hotelData._id} transferOptions={hotelData.transferOptions} />
        )}
        {selectedNavItem === 'Aquamotion' && (
          <WaterSportsOnHotelHome id={hotelData._id} waterSports={hotelData.waterSports} />
        )}
        {selectedNavItem === 'Reef' && <ReefOnHotelHome id={hotelData._id} reef={hotelData.reef} />}
        {selectedNavItem === 'GYM' && <GYMOnHotelHome id={hotelData._id} gym={hotelData.gym} />}
        {selectedNavItem === 'Kids Club' && <KidsClubOnHotelHome id={hotelData._id} kidsClub={hotelData.kidsClub} />}
        {selectedNavItem === 'Food & Beverage' && (
          <FoodAndBeverageOnHotelHome id={hotelData._id} foodAndBeverage={hotelData.foodAndBeverage} />
        )}
        {selectedNavItem === 'Services' && <ServicesOnHotelHome id={hotelData._id} services={hotelData.services} />}
        {selectedNavItem === 'Pool' && <PoolOnHotelHome id={hotelData._id} pool={hotelData.pool} />}
        {selectedNavItem === 'Room' && <RoomOnHotelHome id={hotelData._id} room={hotelData.rooms} />}
        {selectedNavItem === 'Media' && <BeachOnHotelHome id={hotelData._id} beach={hotelData.beach} />}
      </Box>
    </Box>
  );
}

const SidebarContent = ({ onClose, handleNavItemClick, selectedNavItem, ...rest }) => {
  const dispatch = useDispatch();
  const navigation = useNavigate();
  const handleLogout = () => {
    console.log('clicked=====');
    dispatch(hotelLogout());
    setTimeout(() => {
      navigation('/hotel-login');
    }, 1000);
  };
  return (
    <Box
      bg={useColorModeValue('white', 'gray.900')}
      borderRight="1px"
      borderRightColor={useColorModeValue('gray.200', 'gray.700')}
      w={{ base: 'full', md: 60 }}
      pos="fixed"
      h="full"
      overflowY="auto"
      {...rest}
      // mb={30}
      // border={'1px solid red'}
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Button colorScheme="red" onClick={handleLogout}>
          Logout
        </Button>
        <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
          Logo
        </Text>
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
      </Flex>
      <Box maxHeight="calc(100vh - 80px)" overflowY="auto">
        {' '}
        {LinkItems.map(link => (
          <NavItem
            key={link.name}
            icon={link.icon}
            onClick={() => handleNavItemClick(link.name)}
            isActive={selectedNavItem === link.name}
          >
            {link.name}
          </NavItem>
        ))}
      </Box>
    </Box>
  );
};

const NavItem = ({ icon, children, onClick, isActive, ...rest }) => {
  return (
    <Box as="a" href="#" style={{ textDecoration: 'none' }} _focus={{ boxShadow: 'none' }}>
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: 'blue.400',
          color: 'white',
        }}
        bg={isActive ? 'cyan.400' : 'transparent'}
        color={isActive ? 'white' : 'inherit'}
        mt={2}
        mb={2}
        {...rest}
        onClick={onClick}
      >
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: 'white',
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Box>
  );
};

const MobileNav = ({ onOpen, ...rest }) => {
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 24 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue('white', 'gray.900')}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
      justifyContent="flex-start"
      {...rest}
    >
      <IconButton variant="outline" onClick={onOpen} aria-label="open menu" icon={<FiMenu />} />

      <Text fontSize="2xl" ml="8" fontFamily="monospace" fontWeight="bold">
        Logo
      </Text>
    </Flex>
  );
};
