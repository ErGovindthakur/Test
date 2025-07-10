import urlModels from "../models/url.models.js";
import { nanoid } from "nanoid";

export const createShortUrl = async (req, res) => {
  const { originalUrl } = req.body;

  try {
    const shortId = nanoid(6);
    // const newUrl = new urlModels({ originalUrl, shortId });
    // await newUrl.save();

    await urlModels.create({
      originalUrl,
      shortId
    })
    
    res.status(201).json({
      success: true,
      message: "URL created successfully",
      shortUrl: `${process.env.BASE_URL}/${shortId}`, 
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

export const redirectToOriginalUrl = async (req, res) => {
  const { shortId } = req.params;

  try {
    const found = await urlModels.findOne({ shortId });

    if (found) {
      res.redirect(found.originalUrl);
    } else {
      res.status(404).send("URL not found");
    }
  } catch (err) {
    res.status(500).send("Server Error");
  }
};
