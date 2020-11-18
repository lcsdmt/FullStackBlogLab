import * as express from "express";
import db from "../db";

const router = express.Router();

//all
router.get("/", async (req, res) => {
  try {
    const blogs = await db.Blogs.allblogs();
    res.json(blogs);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

//one
router.get("/:id", async (req, res) => {
  const data = await db.Blogs.oneblog(req.params.id);
  // get associated tags for this one blog
  res.json(data[0]);
});

router.put("/:id", async (req, res) => {
  db.Blogs.updateblog(req.body.content, req.params.id);
  res.sendStatus(200);
});

router.post('/', async (req: express.Request, res: express.Response) => {
  const blog = req.body
  try {
    const postAuth = await db.Authors.postauthor(blog.name, blog.email);
		const post = await db.Blogs.postblog(blog.title, blog.content, postAuth.insertId);
		res.json(post)
	} catch (error) {
		console.log(error);
		res.status(500).json(error);
	}
});

router.delete("/:id", async (req, res) => {
    db.Blogs.deleteblog(req.params.id);
    res.send(`Blog ${req.params.id} was deleted`)
});

export default router;