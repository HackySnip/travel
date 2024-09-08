import axios from "axios";

export const getTravelTime = async (origin: string, destination: string) => {
  const apiKey = process.env.HERE_API_KEY;

  if (!apiKey) {
    throw new Error("HERE API key is not defined");
  }

  console.debug(
    `Fetching route from ${origin} to ${destination} using HERE API`
  );

  try {
    const response = await axios.get("https://router.hereapi.com/v8/routes", {
      params: {
        apikey: apiKey,
        transportMode: "car",
        origin,
        destination,
        return: "summary,polyline",
      },
    });

    console.debug("HERE API response:", response.data);

    if (!response.data.routes || response.data.routes.length === 0) {
      throw new Error("No routes found");
    }

    const route = response.data.routes[0];
    if (!route.sections || route.sections.length === 0) {
      throw new Error("No sections found in the route");
    }

    const travelTime = route.sections[0].summary.duration / 60; // Convert seconds to minutes

    return { travelTime, polyline: route.sections[0].polyline };
  } catch (error) {
    console.error("Error fetching travel time:", error);
    throw new Error("Failed to fetch travel time");
  }
};
