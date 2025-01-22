import { Link } from "react-router-dom";

const Page404 = () => {
    return (
        <div className="page-404">
            <h2>Sorry</h2>
            <p>Page cannot be found</p>
            <p>You might have entered the wrong URL</p>
            <br></br>
            <Link to="/">Back to homepage</Link>
        </div>
    );
}
 
export default Page404;