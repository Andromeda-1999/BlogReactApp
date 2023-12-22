import { useParams } from "react-router";
import { useHistory } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
    // this allows as to grab parameters from the route
    const { id } = useParams()
    // use useFetch again to access the data of the blog with that particular id
    // in the useFetch Custom hook that we made we were  
    const { data: blog, error, isPending } = useFetch('http://localhost:8001/blogs/' + id);
    const history = useHistory();
    //make a fetch request to delete that blog with the blog id
    const handleClick = () => {
        fetch('http://localhost:8001/blogs/' + blog.id, {
            method: 'DELETE'
        }).then(() => {
            //and when that blog object with that id at that end point local host is deleted we can send the user back to home
            history.push('/');
        })
    }
    return (
        <div className="blog-details">
            {/* conditional templating ,logical end evaluates the left first and if it is not true (error=null) it does not bother with the tag
            but if it is true then it outputs the blog*/}
            { isPending && <div>Loading...</div>}
            { error && <div>{error}</div>}
            { blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                    <div>{blog.body}</div>
                    <button onClick={handleClick}>delete</button>
                </article>
            )}
        </div>

    );
}

export default BlogDetails;