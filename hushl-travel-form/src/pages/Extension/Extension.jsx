import React, {useState} from 'react'
import NewsApi from './NewsApi/NewsApi'
import { Button, Center, Flex, Box } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import YouTube from './YouTube/YouTube'

const Extension = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);


    return (
        <div>
            <Center>
                <Flex>
                    <Box cursor={"pointer"} pr={4}>
                        <a
                            href="https://hushl-familyflyer.s3.ap-south-1.amazonaws.com/summary+(2).zip"
                            download={true}
                            onClick={click ? handleClick : null}
                        >
                            <Button 
                                fontSize={["24px", "20px", "16px"]}>
                                Download chrome extension
                            </Button>
                        </a>
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








