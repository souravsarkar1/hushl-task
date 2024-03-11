import React from 'react'
import NewsApi from './NewsApi/NewsApi'
import { Button, Center, Flex, Box } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import YouTube from './YouTube/YouTube'

const Extension = () => {
    // const [click, setClick] = useState(false);
    // const handleClick = () => setClick(!click);

    // function handleResume() {
//     window.open("https://drive.google.com/file/d/1wdvRe1jUn7x-yRxI1aFdAQcAx_ZP_UtJ/view?usp=sharing");
//    }

    return (
        <div>
            <Center>
                <Flex>
                    <Box cursor={"pointer"} pr={4}>
                        {/* <a
                            // href={Sagarika_Nikhade_Resume} 
                            download={true}
                            target='_blank'
                            onClick={click ? handleClick : null}
                        > */}
                            <Button
                                //   onClick={handleResume}  
                                fontSize={["24px", "20px", "16px"]}>
                                Download chrome extension
                            </Button>
                        {/* </a> */}
                    </Box>
                    <br />
                    <Box cursor={"pointer"} pr={4}>
                    <Link to="/newsapi" element={<NewsApi />} >
                        <Button fontSize={["24px", "20px", "16px"]}>News Api</Button>
                    </Link>
                    </Box>
                    <br />
                    <Box cursor={"pointer"} pr={4}>
                    <Link to="/you-tube" element={<YouTube/>} >
                        <Button fontSize={["24px", "20px", "16px"]}>You Tube</Button>
                    </Link>
                    </Box>
                </Flex>
            </Center>
        </div>
    )
}

export default Extension








