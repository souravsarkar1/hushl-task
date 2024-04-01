import { useState } from 'react';
import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Image,
  useToast,
  InputGroup,
  InputRightElement,
} from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { hotelLogin } from '../../redux/User/action';
import { ClipLoader } from 'react-spinners';
import { useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Login = () => {
  const [userInformations, setUserInformations] = useState({
    userName: '',
    password: '',
  });
  const [showPassword, setShowPassword] = useState(false);

  const hotelLoginIsLoading = useSelector(st => st.authReducer.hotelLoginIsLoading);
  const hotelLoginIsError = useSelector(st => st.authReducer.hotelLoginIsError);
  const toast = useToast();
  const dispatch = useDispatch();
  const navigation = useNavigate();

  const handleInputChange = e => {
    const { name, value } = e.target;
    setUserInformations({ ...userInformations, [name]: value });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = () => {
    dispatch(hotelLogin(userInformations, toast)).then(res => {
      if (!hotelLoginIsError) {
        navigation('/hotel-home');
      }
    });
  };

  return (
    <Stack minH={'101vh'} direction={{ base: 'column', md: 'row' }}>
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
        <Stack spacing={4} w={'full'} maxW={'md'}>
          <Heading fontSize="2xl" bgGradient="linear(to-r, #7928CA, #FF0080)" bgClip={'text'}>
            Sign in to your hotel
          </Heading>
          <FormControl id="email">
            <FormLabel>Email address</FormLabel>
            <Input type="email" value={userInformations.userName} name="userName" onChange={handleInputChange} />
          </FormControl>
          <FormControl id="password">
            <FormLabel>Password</FormLabel>
            <InputGroup>
              <Input
                type={showPassword ? 'text' : 'password'} // Toggle between text and password type
                value={userInformations.password}
                name="password"
                onChange={handleInputChange}
              />
              <InputRightElement>
                <Button h="1.75rem" size="sm" onClick={togglePasswordVisibility}>
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </Button>
              </InputRightElement>
            </InputGroup>
          </FormControl>
          <Stack spacing={6}>
            <Button
              bgGradient="linear(to-r, #7928CA, #FF0080)"
              colorScheme={'#7928CA'}
              variant={'solid'}
              onClick={handleSubmit}
            >
              {hotelLoginIsLoading ? <ClipLoader color="#36d7b7" /> : 'Login'}
            </Button>
          </Stack>
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Image
          alt={'Login Image'}
          objectFit={'cover'}
          src={
            'https://images.unsplash.com/photo-1529539795054-3c162aab037a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          }
        />
      </Flex>
    </Stack>
  );
};

export default Login;
