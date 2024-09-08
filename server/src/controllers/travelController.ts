import { Request, Response } from "express";
import { getTravelTime } from "../services/travelService";
import { sendError, sendSuccess } from "../utils/apiResponse";

export const getTravelTimeInfo = async (req: Request, res: Response) => {
  console.debug("Received request:", req.query);
  const { origin, destination } = req.query;

  if (!origin || !destination) {
    console.warn(
      "Missing required query parameters: origin and/or destination"
    );
    return sendError(res, 400, "Please provide both origin and destination");
  }

  try {
    const travelTime = await getTravelTime(
      origin as string,
      destination as string
    );
    sendSuccess(res, { travelTime });
  } catch (error) {
    console.error("Error fetching travel time:", error);
    sendError(res, 500, "Failed to retrieve travel time");
  }
};
