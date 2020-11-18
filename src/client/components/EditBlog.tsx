import React from "react";
import { RouteComponentProps, useParams, useHistory } from "react-router-dom";
import { blog } from "../scss/types";

const EditBlog: React.FC<IEditBlogProps> = (props: IEditBlogProps) => {
  const [blog, setBlog] = React.useState<blog>({
    id: "",
    title: "",
    name: "",
    email: "",
    content: "",
    authorid: "",
  });


  React.useEffect(() => {
    (async () => {
      try {
        let res = await fetch(`/api/blogs/${props.match.params.id}`);
        let blog = await res.json();
        setBlog(blog);
        // console.log(blog.name);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  const deleteBlog = async (id: string) => {
    await fetch(`/api/blogs/${id}`, {
      method: "DELETE",
    });

    props.history.push("/");
  };

  const editContent = async (id: string) => {
    const newBlog = {
      name: blog.name,
      content: blog.content,
    };

    await fetch(`/api/blogs/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newBlog),
    });

    props.history.push("/");
  };

  const onMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) =>
    setBlog({
      id: blog.id,
      title: blog.title,
      name: blog.name,
      email: blog.email,
      content: e.target.value,
      authorid: blog.authorid,
    });


  return (
    <div className="container">
      <div className="card shadow-lg m-2">
        <div className="card-body shadow">
          <div className="row">
            <h5 className="card-title">
              <u>{blog.title}</u>
            </h5>
          </div>
          <div className="row">
            <h6>By: {blog.name}</h6>
          </div>
          <div className="row">
            <textarea
              className="card-text"
              defaultValue={blog.content}
              cols={50}
              rows={15}
              onChange={(e) => onMessageChange(e)}
            ></textarea>
          </div>
          <button
            className="btn btn-sm btn-outline-warning float-right mx-1 mt-3 rounded-pill"
            onClick={() => editContent(blog.id)}
          >
            Save
          </button>
          <button
            className="btn btn-sm btn-outline-danger float-right mx-1 mt-3 rounded-pill"
            onClick={() => deleteBlog(blog.id)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

interface IEditBlogProps extends RouteComponentProps<{ id: string }> {}

export default EditBlog;
