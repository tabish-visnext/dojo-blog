const BlogList = ({blogs, title, handleDelete}) => {
    return ( 
        <div className="blog-list">
            {blogs.map((blog) => (
                <div className="blog-preview" key={blogs.id}>
                    <h2>{blog.title}</h2>
                    <p>{blog.author}</p>
                    <button onClick={() => handleDelete(blog.id)}>Delete Blog</button>
                </div>
            ))}
        </div>
    );
}
export default BlogList;