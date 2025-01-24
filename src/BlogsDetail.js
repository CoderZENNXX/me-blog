import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

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
        <button className="back-arrow" onClick={() => history.go(-1)}>↩</button>
        <h2>
            {IsLoading && <div>Loading....</div>}
            {IsError && <div>{IsError}</div>}
            {blogs && (
                <article>
                    <h2 class="title">{blogs.title}</h2>
                    <br></br>
                    <p>{blogs.body}</p>
                    <br></br>
                    <p className="author">Written by {blogs.author}</p>
                </article>
            )
            }
        </h2>

        <button className="blog-button"onClick={handleDelete}>Delete Blog</button>
        <button className="blog-button"><Link to={`/blogs/${id}/edit`}>Edit Blog</Link></button>
    </div>
    );
}
 
export default BlogsDetail;
