import {useState} from "react"

const Home = () => {

    const [myName, setMyName] = useState("Tayzar");
    const [age, setAge] = useState(12);

    const handleClick = () => {
        setMyName("Myat")
        setAge(24)
    }

    return (
        <div className="home">
            <h2>Home Page</h2>
            <p>{myName} is {age} years old</p>
            <button onClick={() => handleClick("Tayzar")}>Name Button</button>
        </div>
    );
}
 
export default Home;