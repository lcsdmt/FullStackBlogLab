import React from 'react';
import { RouteComponentProps } from "react-router-dom";
import { blog } from "../scss/types";

const AddNewBlog: React.FC<IAddNewBlogProps> = (props: IAddNewBlogProps) => {
    const [blog, setBlog] = React.useState<blog>({
        title: "",
        name: "",
        email: "",
        content: "",
        authorid:""
    });

    const onNameChange = (e: React.ChangeEvent<HTMLInputElement>) => setBlog({
        title: blog.title,
        name: e.target.value,
        email: blog.email,
        content: blog.content,
        authorid: blog.authorid 
    });

    const onEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => setBlog({
        title: blog.title,
        name: blog.name,
        email: e.target.value,
        content: blog.content,
        authorid: blog.authorid  
    });
    
    const onTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => setBlog({
        title: e.target.value,
        name: blog.name,
        email: blog.email,
        content: blog.content,
        authorid: blog.authorid  
    });
    
    const onContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => setBlog({
        title: blog.title,
        name: blog.name,
        email: blog.email,
        content: e.target.value,
        authorid: blog.authorid 
    });

    const saveBlog = async () => {
        await fetch("/api/blogs", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(blog)
        });

        props.history.push("/");
    }

    return (
        <div className="container">
            <div className="card shadow-lg m-2">
                <div className="card-body">
                <div className="row">
                        <input type="text" className="card-title" onChange={onTitleChange} placeholder="Title"/>
                    </div>
                    <div className="row">
                        <input type="text" className="card-title" onChange={onNameChange} placeholder="Name"/>
                        <input type="text" className="card-title" onChange={onEmailChange} placeholder="Email"/>
                    </div>
                    <div className="row">
                        <textarea className="card-text" cols={50} rows={15} onChange={onContentChange} placeholder="Blog"></textarea>
                    </div>
                    <button className="btn btn-sm btn-outline-warning float-right mx-1 mt-3" onClick={saveBlog}>Save</button>
                </div>
            </div>
        </div>
    )
}

interface IAddNewBlogProps extends RouteComponentProps { }





export default AddNewBlog;
