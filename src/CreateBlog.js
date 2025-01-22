import { useState } from "react";
import { useHistory } from "react-router-dom";

const CreateBlog = () => {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [author, setAuthor] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const history = useHistory()

    const handleSubmit = (e) => {
        e.preventDefault()
        const blog = {title, body, author}

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

                {!isLoading && <button>Add Blog</button>}
                {isLoading && <button disabled>Adding Blog....</button>}

            </form>
        </div>
    );
}
 
export default CreateBlog;