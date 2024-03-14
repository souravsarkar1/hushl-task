export const handleLocationSearch = async locationName => {
  const googleApiKey = process.env.REACT_APP_API_GOOLE_API_KEY;
  // Use forward geocoding to get latitude and longitude based on the location name
  const apiUrl = `https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(
    locationName,
  )}&key=${googleApiKey}`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    if (data.results && data.results.length > 0) {
      const { lat, lng } = data.results[0].geometry;
      // console.log(lat, lng);
      return { lat, lng };
    } else {
      return { error: `Invalid Location Name` };
    }
  } catch (error) {
    return { error: `Invalid Location Name` };
  }
};
