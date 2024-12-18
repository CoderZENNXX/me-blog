import BlogList from "./BlogList"
import useFetch from "./useFetch"

const Home = () => {
    const {data: blogs, isLoading, isError} = useFetch("http://localhost:8000/blogs")

    return (
        <div className="home">
            {isError && <div>{isError}</div>}
            {isLoading && <div><h1>Loading...</h1></div>}
            {blogs && <BlogList blogs={blogs} title="All Blogs"></BlogList>}
        </div>
    );
}
 
export default Home;