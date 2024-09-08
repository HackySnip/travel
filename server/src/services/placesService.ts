import axios from "axios";

export const getPlacesInBoundingBox = async (
  north: number,
  south: number,
  east: number,
  west: number,
  categories: string[]
) => {
  const apiKey = process.env.HERE_API_KEY;

  try {
    const response = await axios.get(
      "https://places.ls.hereapi.com/places/v1/discover/explore",
      {
        params: {
          apikey: apiKey,
          in: `${north},${east};${south},${west}`, // Bounding box coordinates
          cat: categories.join(","),
        },
      }
    );

    if (!response.data.results || !response.data.results.items) {
      throw new Error("No places found");
    }

    return response.data.results.items;
  } catch (error) {
    console.error("Error fetching places:", error);
    throw new Error("Failed to fetch places in the bounding box");
  }
};
