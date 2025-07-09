import express from "express";
import { createShortUrl, redirectToOriginalUrl } from "../controllers/urlController.js";

const router = express.Router();

router.post("/shorten",createShortUrl);
router.get("/:shortId",redirectToOriginalUrl)

export default router