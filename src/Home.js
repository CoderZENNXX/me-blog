import {useState, useEffect} from "react"
import BlogList from "./BlogList"

const Home = () => {
    const [blogs, setBlogs] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(null);

    useEffect(() => {
        fetch("http://localhost:8000/blogs")
        .then(res => {
            if (!res.ok) {
                throw Error("Could not get a response for the fetch!!")
            }
            return res.json()
        })
        .then(data => {
            setBlogs(data)
            setIsLoading(false)
            setIsLoading(null)
        })
        .catch(err => {
            setIsLoading(false)
            setIsError(err.message);
        })
    }, [])

    return (
        <div className="home">
            {isError && <div><h1>Could not get a response for the fetch!!</h1></div>}
            {isLoading && <div><h1>Loading...</h1></div>}
            {blogs && <BlogList blogs={blogs} title="All Blogs"></BlogList>}
        </div>
    );
}
 
export default Home;