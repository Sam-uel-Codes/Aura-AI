import express from "express";
import {auth} from "../middlewares/auth.js"
import { generateArticle, generateBlogTitle, generateImage, removeImageBackground, removeImageObject, resumeReview } from "../controllers/aiController.js";
import {upload} from "../configs/multer.js"

const aiRouter = express.Router();
aiRouter.post('/generate-article', auth, generateArticle);
aiRouter.post('/generate-blogtitles', auth, generateBlogTitle);
aiRouter.post('/generate-image', upload.single('image'), auth, generateImage);
aiRouter.post('/remove-background', upload.single('image'), auth, removeImageBackground);
aiRouter.post('/remove-objects', upload.single('image'), auth, removeImageObject);
aiRouter.post('/review-resume', upload.single('image'), auth, resumeReview);

export default aiRouter