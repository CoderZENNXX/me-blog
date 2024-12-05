import {useState, useEffect} from "react"
import BlogList from "./BlogList"

const Home = () => {
    const [blogs, setBlogs] = useState([
        {title: 'My new website', body: 'lorem ipsum...', author: 'Tayzar', id: 1},
        {title: 'Welcome party!', body: 'lorem ipsum...', author: 'Myat', id: 2},
        {title: 'Web dev top tips', body: 'lorem ipsum...', author: 'Khant', id: 3}
    ]);

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }

    const [name, setName] = useState("Tayzar")

    useEffect(() => {
        console.log("useEffect ran")
        console.log(name)
    }, [name])

    return (
        <div className="home">
            <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete}></BlogList>
            <BlogList blogs={blogs.filter((blog) => blog.author === "Tayzar")} title="Tayzar's Blogs"></BlogList>
            <p>{name}</p>
            <button onClick={() => setName("Myat")}>change name</button>
        </div>
    );
}
 
export default Home;