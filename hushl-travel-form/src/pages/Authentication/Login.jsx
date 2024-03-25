import { Button, Flex, FormControl, FormLabel, Heading, Input, Stack, Image, useToast } from '@chakra-ui/react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { hotelLogin } from '../../redux/User/action';
import { ClipLoader } from 'react-spinners';
import { useNavigate } from 'react-router-dom';
const Login = () => {
  const [userInformations, setUserInformations] = useState({
    userName: 'adaaran@123',
    password: 'ada123f8',
  });
  /**
   * hotelIsAuth: false,
  hotelLoginIsLoading: false,
  hotelLoginIsError: false,
   */
  const hotelLoginIsLoading = useSelector(st => st.authReducer.hotelLoginIsLoading);
  const hotelLoginIsError = useSelector(st => st.authReducer.hotelLoginIsError);
  const toast = useToast();
  const dispatch = useDispatch();
  const navigation = useNavigate();
  const handleInputChange = e => {
    const { name, value } = e.target;
    setUserInformations({ ...userInformations, [name]: value });
  };
  const handleSubmit = () => {
    console.log(userInformations);
    dispatch(hotelLogin(userInformations, toast)).then(res => {
      console.log(hotelLoginIsError);
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
            <Input type="password" value={userInformations.password} name="password" onChange={handleInputChange} />
          </FormControl>
          <Stack spacing={6}>
            {/*<Stack direction={{ base: 'column', sm: 'row' }} align={'start'} justify={'space-between'}>
              <Checkbox>Remember me</Checkbox>
              <Text color={'blue.500'}>Forgot password?</Text>
          </Stack>*/}
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
          //   borderRadius={'40px'}
          src={
            'https://images.unsplash.com/photo-1529539795054-3c162aab037a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          }
        />
      </Flex>
    </Stack>
  );
};

export default Login;
