import express from "express";
import { farmImage, getFarmById, getFarms } from "../controller/farm.js";
import { upload } from "../upload.js";

const router = express.Router();

router.post("/",upload.array("farmPhotos", 10), farmImage);
router.get("/farms", getFarms);
router.get("/:farmId", getFarmById); 
export default router;