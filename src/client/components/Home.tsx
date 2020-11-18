import React from "react";
import { Link } from "react-router-dom";
import { blog } from "../scss/types";

const Home: React.FC<IHomeProps> = () => {
  const [blogs, setBlogs] = React.useState<blog[]>([]);

  React.useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      let res = await fetch("/api/blogs");
      let blogs: blog[] = await res.json();
      // blogs.reverse();
      setBlogs(blogs);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="container">
      {blogs.map((blog: blog) => (
        <div key={blog.id} className="card shadow-lg m-2">
          <div className="card-body shadow">
          <div className="row">
            <h4 className="card-title">
              <u>{blog.title}</u>
            </h4>
          </div>
          <div className="row">
            <h6>By: {blog.name}</h6>
          </div>
          <div className="row">
          <p className="card-text">{blog.content}</p>
          </div>
            <Link to={`/blog/${blog.id}/edit`}>
              <button className="btn btn-sm btn-outline-info float-right rounded-pill">
                Edit Blog Post
              </button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

interface IHomeProps {}
export default Home;
