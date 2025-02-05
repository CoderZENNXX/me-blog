import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import useFetch from "./useFetch";
import { useEffect } from "react";

const UpdateBlog = () => {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [author, setAuthor] = useState("");
    const [openingId, setOpeningId] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const {id} = useParams();
    const {data: blogs} = useFetch("http://localhost:8000/blogs/" + id)
    const history = useHistory()

    useEffect(() => {
        if (blogs) {
            setTitle(blogs.title);
            setBody(blogs.body);
            setAuthor(blogs.author);
            setOpeningId(blogs.openingId)
        }
    }, [blogs]);

    const handleEdit = (e) => {
        e.preventDefault()
        const today = new Date();
        const month = today.getMonth()+1;
        const year = today.getFullYear();
        const day = today.getDate();
        const hour = today.getHours();
        const minute = today.getMinutes();
        const date = day + "/" + month + "/" + year + ", " + hour + ":" + minute;
        const blog = {title, body, author, openingId, date}

        fetch("http://localhost:8000/blogs/" + blogs.id, {
            method: "PUT",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(blog)
        })
        .then(() => {
            console.log("Blog Edited")
            setIsLoading(false)
            history.go(-1)
        })
    }

    return (
        <>
        <div className="back-arrow-div">
            <button className="back-arrow" onClick={() => history.go(-1)}>↩</button>
        </div>
        <div className="update">
            <h2>Edit Blog</h2>
            <form onSubmit={handleEdit}>
                <label>Title:</label>
                <input 
                type="text"
                required
                value={title}
                placeholder="Title"
                onChange={(e) => setTitle(e.target.value)}
                >
                </input>

                <label>Text:</label>
                <textarea
                required
                value={body}
                placeholder="Text"
                onChange={(e) => setBody(e.target.value)}
                >
                </textarea>

                <label>Author:</label>
                <input 
                type="text"
                required
                value={author}
                placeholder="Author"
                onChange={(e) => setAuthor(e.target.value)}
                >
                </input>

                <label>ID:</label>
                <input 
                type="text"
                value={openingId}
                placeholder="ID (optional)"
                onChange={(e) => setOpeningId(e.target.value)}
                >
                </input>

                {!isLoading && <button class="update-done">Done</button>}
                {isLoading && <button disabled>Editing</button>}

            </form>
        </div>
        </>
    );
}
 
export default UpdateBlog;