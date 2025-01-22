import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { useHistory } from "react-router-dom";

const BlogsDetail = () => {
    const {id} = useParams();
    const {data: blogs, IsError, IsLoading} = useFetch("http://localhost:8000/blogs/" + id)
    const history = useHistory()

    const handleDelete = () => {
        fetch("http://localhost:8000/blogs/" + blogs.id, {
            method: "DELETE"
        })
        .then(() => {
            history.push("/")
        })
    }

    return (
    <div className="blogs-detail">
        <h2>
            {IsLoading && <div>Loading....</div>}
            {IsError && <div>{IsError}</div>}
            {blogs && (
                <article>
                    <h2>{blogs.title}</h2>
                    <div>{blogs.body}</div>
                    <p>Written by {blogs.author}</p>
                </article>
            )
            }
        </h2>

        <button onClick={handleDelete}>Delete Blog</button>
    </div>
    );
}
 
export default BlogsDetail;