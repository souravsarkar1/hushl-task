function HotelTable({ data }) {
    // Check if data is null or empty
    if (!data || data.length === 0) {
        return <div>No hotel data available</div>;
    }

    // Function to render each hotel's details
    const renderHotelDetails = () => {
        return data.map((hotel, index) => {
            const hotelName = Object.keys(hotel)[0];
            const details = hotel[hotelName];
            return (
                <tr key={index}>
                    <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>{hotelName}</td>
                    {Object.keys(details).map((key, idx) => (
                        <td key={idx} style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>{details[key]}</td>
                    ))}
                </tr>
            );
        });
    };

    return (
        <div>
            <h2>Hotel Details</h2>
            <table style={{ borderCollapse: 'collapse', width: '100%' }}>
                <thead>
                    <tr>
                        <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>Hotel Name</th>
                        {Object.keys(data[0][Object.keys(data[0])[0]]).map((key, index) => (
                            <th key={index} style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>{key}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {renderHotelDetails()}
                </tbody>
            </table>
        </div>
    );
}

export default HotelTable;



