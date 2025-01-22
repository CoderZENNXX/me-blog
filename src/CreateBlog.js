import { useState } from "react";

const CreateBlog = () => {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [author, setAuthor] = useState("");

    return (
        <div className="create">
            <h2>Add a new blog</h2>
            <form>
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

                <button>Add Blog</button>
            </form>
        </div>
    );
}
 
export default CreateBlog;