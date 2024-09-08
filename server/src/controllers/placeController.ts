import { Request, Response } from "express";
import { sendError, sendSuccess } from "../utils/apiResponse";
import { getPlacesInBoundingBox } from "../services/placesService";

export const getPlaceInBoundingBox = async (req: Request, res: Response) => {
  const { north, south, east, west, categories } = req.body;

  if (!north || !south || !east || !west || !categories) {
    return sendError(
      res,
      400,
      "Please provide bounding box coordinates and categories"
    );
  }

  try {
    const places = await getPlacesInBoundingBox(
      north,
      south,
      east,
      west,
      categories
    );
    sendSuccess(res, { places });
  } catch (error) {
    console.error("Error fetching places in the bounding box:", error);
    sendError(res, 500, "Failed to retrieve places in the bounding box");
  }
};
