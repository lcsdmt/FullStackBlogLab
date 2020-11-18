import * as express from "express";
import blogsRouter from "./blogs";
// import authorsRouter from "./authors";

const router = express.Router();

router.use("/blogs", blogsRouter);
// router.use("/authors", authorsRouter);

export default router


