import axios from "axios";

export const getLatLonByCity = async (
  city: string,
  kinds: string,
  radius: number
) => {
  const apiKey = process.env.OPENTRIPMAP_API_KEY;

  const geoResponse = await axios.get(
    `https://api.opentripmap.com/0.1/en/places/geoname`,
    {
      params: {
        name: city,
        apikey: apiKey,
      },
    }
  );

  const { lat, lon } = geoResponse.data;

  const placesResponse = await axios.get(
    `https://api.opentripmap.com/0.1/en/places/radius`,
    {
      params: {
        radius,
        lat,
        lon,
        kinds,
        apikey: apiKey,
      },
    }
  );

  return placesResponse.data;
};
