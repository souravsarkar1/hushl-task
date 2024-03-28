import React, { useState } from 'react';
import { Button, Box, Input, Center} from '@chakra-ui/react';
import axios from "axios";
import { BeatLoader } from 'react-spinners';
import HotelTable from '../HotelTable';


const NewsApi = () => {
    const [query_params, setQuery_params] = useState("");
    const [showdata, setShowData] = useState([]);
    const [loading, setLoading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        axios.post('http://13.234.116.79/news/', { query_params: query_params })
        // axios.post('http://127.0.0.1:8000/news/', { query_params: query_params })
            .then((res) => {
                if (res && res.data) {
                    console.log(res.data);
                    setShowData(res.data);
                } else {
                    console.error('Invalid response format:', res);
                    // Handle invalid response format
                }
            })
            .catch((err) => console.log(err))
            .finally(() => {
                setLoading(false);
            });
    };


    // console.log(Object.keys(showdata))
    return (
        <Box>
            <Center>
                <h1 style={{ fontSize: "60px", color: "teal" }}>News Api</h1>
            </Center>
            <Center>
                <Box style={{ margin: "30px" }}>
                    <Input
                        placeholder='Enter keyword here'
                        value={query_params}
                        onChange={(e) => setQuery_params(e.target.value)}
                        style={{ width: "400px", border: "1px solid teal", color: "teal" }}
                    />
                    <Center>
                        <Button
                            style={{ margin: "20px", width: "200px", backgroundColor: "teal", color: "white" }}
                            onClick={handleSubmit}
                        >
                            Get Data
                        </Button>
                    </Center>
                </Box>
            </Center>
            <br />
            
            <Box style={{ border: "0px solid teal", margin: "20px" }}>

                {loading && <Center><BeatLoader color="#36d7b7" /></Center>}
                {!loading && showdata.length > 0 && (
                    <HotelTable data={showdata} />
                )}

            </Box>
        </Box>
    )
}


export default NewsApi




