import { Query, Connection } from "./index";

const allblogs = async () =>
  Query(
    `SELECT Blogs.*, Authors.name, Authors.email 
    FROM Blogs
    JOIN Authors on Authors.id = Blogs.authorid
    ORDER BY Authors.id DESC`
  );

const oneblog = async (id: string) =>
  Query(
    `SELECT Blogs.*, Authors.name, Authors.email 
    FROM Blogs JOIN Authors on Authors.id = Blogs.authorid 
    WHERE Blogs.id = ?`,
    [id]
  );

const updateblog = async (content: string, id: string) =>
  Query(`UPDATE Blogs SET content = ? WHERE id = ?`, [content, id]);
// add title

const postblog = (title: string, content: string, authorid: number) =>
  Query(`INSERT INTO Blogs (title, content, authorid) VALUE (?, ?, ?);`, [
    title,
    content,
    Number(authorid),
  ]);

const deleteblog = async (id: string) =>
  Query("DELETE FROM Blogs WHERE id=?", [id]);

export default {
  allblogs,
  oneblog,
  updateblog,
  postblog,
  deleteblog,
};
