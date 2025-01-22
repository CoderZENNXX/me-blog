import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogsDetail = () => {
    const {id} = useParams();
    const {data: blogs, IsError, IsLoading} = useFetch("http://localhost:8000/blogs/" + id)

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
    </div>
    );
}
 
export default BlogsDetail;