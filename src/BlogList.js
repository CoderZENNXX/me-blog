const BlogList = ({blogs, title, handleDelete}) => {

    return (
        <div className="blog-list">
            <h2 style={{ 
          color: '#f1356d'
        }}>{title}</h2>
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                    <button onClick={() => handleDelete(blog.id)} style={{ 
                    color: 'white', 
                    backgroundColor: '#f1356d',
                    borderRadius: '8px',
                    marginTop: "15px" 
                    }}>Delete Blog</button>
                </div>
            ))}
        </div>
    );
}

export default BlogList;