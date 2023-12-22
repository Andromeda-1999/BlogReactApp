
// in order to use the blog data prop inside this component 
// for which their is keyword props
//destructure props directly inside the parenthesis instead of grabing it later on 

import { Link } from "react-router-dom";

//and specify what properties user wants 
const BlogList = ({ blogs, title, handleDeleteClick }) => {
    // we were already passing the blog prop with all the data in Home component <BlogList blogs={blogs} />
    //then we are grabing that property through props
    // const blogs = props.blogs
    // const title = props.title
    //console.log(props.blogs);
    return (
        <div className="bloglist">
            <h1>{title}</h1>
            {blogs.map(blog => (
                <div className="blog-preview" key={blog.id} >
                    {/* now add link to the blog details component in app js to display the details of that certain blog
                    we use curly braces in order to use javascript in here to output some sort of string and not hard code
                     it to ""
                     /blog/ stays the same and then using $ we can concatenate the blog id string for the browser router to route to 
                     so we are capturing the id using the link and passing it in app js router tag for blog details*/}
                    <Link to={`/blogs/${blog.id}`}>
                        <h2>{blog.title}</h2>
                        <p>Written by {blog.author}</p>
                    </Link>

                    {/*inorder to delete the blog create a button which on click through the anonymous
                     arrow function reference in which the id of that certain blog clicked to be 
                     deleted is called  and this handleDelete function is passed as a prop in home which is 
                     invoked when button is click  */}
                    {/* <button onClick={() => handleDeleteClick(blog.id)} >Delete Button </button> */}
                </div>
            ))
            }

        </div >);
}

export default BlogList;