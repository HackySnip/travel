import { Router } from "express";
import { getTravelTimeInfo } from "../controllers/travelController";
import { getPlaceInBoundingBox } from "../controllers/placeController";

const router = Router();

// Route to get travel time
router.get("/travel-time", getTravelTimeInfo);

// Route to get places within a bounding box
router.post("/places-in-bounding-box", getPlaceInBoundingBox);

// Route to get places along the route

export default router;
