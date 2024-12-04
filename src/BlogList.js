const BlogList = ({blogs, title}) => {

    return (
        <div className="blog-list">
            <h2 style={{ 
          color: '#f1356d'
        }}>{title}</h2>
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                </div>
            ))}
        </div>
    );
}

export default BlogList;