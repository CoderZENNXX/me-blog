const Home = () => {

    const handleClick = (name, e) => {
        console.log(`Hello ${name}`)
    }

    return (
        <div className="home">
            <h2>Home Page</h2>
            <button onClick={() => handleClick("Tayzar")}>Hello Button</button>
        </div>
    );
}
 
export default Home;