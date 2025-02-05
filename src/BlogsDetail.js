import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState } from "react";
import {useRef} from "react";
import generatePDF, {Resolution} from "react-to-pdf";

const BlogsDetail = () => {
    const { id } = useParams();
    const { data: blogs, IsError, IsLoading } = useFetch("http://localhost:8000/blogs/" + id);
    const [openingIdValue, setOpeningIdValue] = useState("");
    const [isOpeningIdValue, setIsOpeningIdValue] = useState(false);
    const targetRef = useRef()
    const history = useHistory()
    const openingIdInputRef = useRef(null)
    const submitOpeningIdButton = useRef(null)
    const openingIdVisibilityButton = useRef(null)

    const handleDelete = () => {
        fetch("http://localhost:8000/blogs/" + blogs.id, {
            method: "DELETE",
        })
        .then(() => {
            history.push("/");
        })
    };

    const handleOpeningId = (e) => {
        e.preventDefault();
        if (openingIdValue === blogs.openingId) {
            setIsOpeningIdValue(true);
        } else {
            setIsOpeningIdValue(false);
        }
    };

    const changeInputIdVisibility = () => {
        if (openingIdInputRef.current && openingIdInputRef.current.type === "password" && submitOpeningIdButton.current) {
            openingIdInputRef.current.type = "text";
            submitOpeningIdButton.current.disabled = true;
            submitOpeningIdButton.current.innerText = "Click the eye icon to view!!"
            openingIdVisibilityButton.current.style.color = "rgba(0, 180, 120)"
        }
        else {
            openingIdInputRef.current.type = "password";
            submitOpeningIdButton.current.disabled = false;
            submitOpeningIdButton.current.innerText = "View Blog"
            openingIdVisibilityButton.current.style.color = "black"
        }
    }

    const options = {
        filename: "blog.pdf",
        method: "save",
        resolution: Resolution.MEDIUM,

        page: {
            margin: 18
        }
    }

    return (
        <>
        <div className="back-arrow-div">
            <button className="back-arrow" onClick={() => history.go(-1)}>↩</button>
        </div>
        <div className="blogs-detail">
            <h2>
                {!isOpeningIdValue && (
                    <> 
                    <form onSubmit={handleOpeningId}>
                        <label>Blog ID</label>
                        <p>(If there's no ID, click View Blog without any input.)</p>
                        <div className="opening-id-container">
                            <input
                                ref={openingIdInputRef}
                                type="password"
                                value={openingIdValue}
                                placeholder="Blog ID"
                                className="opening-id-input"
                                onChange={(e) => setOpeningIdValue(e.target.value)}
                            />
                            <button 
                            ref={openingIdVisibilityButton}
                            className="opening-id-visibility-button" 
                            type="button"
                            onClick={changeInputIdVisibility}>
                                👁
                            </button>
                        </div>
                        {!IsLoading && <button ref={submitOpeningIdButton} type="submit">View Blog</button>}
                        {IsLoading && <button disabled>Checking ID</button>}
                    </form>
                    </>
                )
                }   

                {isOpeningIdValue && (
                    <>
                        {IsLoading && <div>Loading....</div>}
                        {IsError && <div>{IsError}</div>}
                        {blogs && (
                            <article ref={targetRef}>
                                <h2 className="title">{blogs.title}</h2>
                                <pre className="body">{blogs.body}</pre>
                                <p className="details">Written by {blogs.author}</p>
                                <p className="details">Last edited at {blogs.date}</p>
                            </article>
                        )}
                    </>
                )}
            </h2>

            {isOpeningIdValue && (
                <>
                    <button className="blog-button delete" onClick={handleDelete}>
                        Delete Blog
                    </button>
                    <button className="blog-button update">
                        <Link className="update-link"to={`/blogs/${id}/edit`}>Edit Blog</Link>
                    </button>
                    <button onClick={() => generatePDF(targetRef, options)}>Download as PDF</button>
                </>
            )}
        </div>
        </>
    );
};

export default BlogsDetail;
