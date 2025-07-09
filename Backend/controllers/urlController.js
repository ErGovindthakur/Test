import urlModels from "../models/url.models.js";

import { nanoid } from "nanoid";

export const createShortUrl = async (req, res, nex) => {
  const { originalUrl } = req.body;

  try {
    const shortId = nanoid(6);
    const newUrl = new urlModels({ originalUrl, shortId });

    await newUrl.save();

    res.status(201).json({
      success: true,
      message: "url created successfully",
      shortUrl: `${process.env.CLIENT_URL}/${shortId}`,
    });
  } catch (err) {
    console.log(err.message);
    res.status(500).send(err.message);
  }
};

export const redirectToOriginalUrl = async(req,res) => {
     const {shortId} = req.params;
     const found = await urlModels.findOne({shortId});

     if(found){
          res.redirect(found.originalUrl);
     }else{
          res.status(404).send("Url not found")
     }
}
