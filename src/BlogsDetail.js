import { useParams } from "react-router-dom";

const BlogsDetail = () => {
    const {id} = useParams();

    return (
    <div className="blogs-detail">
        <h2>Blogs Detail - {id}</h2>
    </div>
    );
}
 
export default BlogsDetail;