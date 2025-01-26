import { useState } from "react";
import { useHistory } from "react-router-dom";

const CreateBlog = () => {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [author, setAuthor] = useState("");
    const [openingId, setOpeningId] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const history = useHistory()

    const handleSubmit = (e) => {
        e.preventDefault()
        const today = new Date();
        const month = today.getMonth()+1;
        const year = today.getFullYear();
        const day = today.getDate();
        const hour = today.getHours();
        const minute = today.getMinutes();
        const date = day + "/" + month + "/" + year + ", " + hour + ":" + minute;
        const blog = {title, body, author, openingId, date}

        fetch("http://localhost:8000/blogs", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(blog)
        })
        .then(() => {
            console.log("New Blog Added")
            setIsLoading(false)
            history.push("/")
        })
    }

    return (
        <div className="create">
            <button className="back-arrow" onClick={() => history.go(-1)}>↩</button>
            <h2>Add a new blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Title:</label>
                <input 
                type="text"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                >
                </input>

                <label>Text:</label>
                <textarea
                required
                value={body}
                onChange={(e) => setBody(e.target.value)}
                >
                </textarea>

                <label>Author:</label>
                <input 
                type="text"
                required
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                >
                </input>

                <label>ID:</label>
                <input 
                type="text"
                value={openingId}
                onChange={(e) => setOpeningId(e.target.value)}
                >
                </input>

                {!isLoading && <button class="add-blog">Add Blog</button>}
                {isLoading && <button disabled>Adding Blog....</button>}

            </form>
        </div>
    );
}
 
export default CreateBlog;