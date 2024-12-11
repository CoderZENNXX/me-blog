import {useState, useEffect} from "react"
import BlogList from "./BlogList"

const Home = () => {
    const [blogs, setBlogs] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch("http://localhost:8000/blogs")
        .then(res => {
            return res.json()
        })
        .then(data => {
            setBlogs(data)
            setIsLoading(false)
        })
    }, [])

    return (
        <div className="home">
            {isLoading && <div><h1>Loading...</h1></div>}
            {blogs && <BlogList blogs={blogs} title="All Blogs"></BlogList>}
        </div>
    );
}
 
export default Home;