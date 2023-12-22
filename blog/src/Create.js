import { useState } from "react";
import { useHistory } from "react-router-dom";
const Create = () => {
    // to keep track of the input textarea and select dropdown
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('mario');
    //allows as to go back and forward in the history and also redirect the user
    //  envoke the hook
    const history = useHistory();
    //create a loading message while the data is being fetched
    const [isPending, setIsPending] = useState(false);

    const handleSubmit = (e) => {
        //the event property which is passed when the form is submitted when ADD Blog is cliked
        e.preventDefault();//this stops the page from refreshing  and values from not being lost
        //creating a blog object which will be saved into that db.json
        const blog = { title, body, author }; // we donot need to use the id property because when we use the json server POST
        //property it will automatically  add an id
        setIsPending(true);
        //post request to json server to add that data to db.json
        //fetch request to all the blogs as the same end point as home and the second arugument is to tack on the data
        //and all so define the type of request we send which is method:POST
        // (/blogs POST Add a new blog )
        //this  wiil make a post request to the end point to add the new blog and json server will automatically add a id property
        fetch('http://localhost:8001/blogs/', {
            method: 'POST',
            //header property for the content type being sent
            //the type of content we are sending with this POST request is json data 
            headers: { "Content-Type": "application/json" },
            //in body we are sending the actual data e.g const blog = { title, body, author };,
            //but we first need to convert it into a JSON string blog is the object we want to turn i nto json string
            body: JSON.stringify(blog)
            //fetch is a asynchronous function
        }).then(() => {
            console.log('new blog added');
            setIsPending(false);
            //thsi will make it go back and fourth -1 means it will go 1 page back
            // history.go(-1);
            //after submitting the blog redirect the user to homepage using push method / is the route for home
            history.push('/');
        })
    }

    return (
        <div className="create">
            <h1>Add a new blog</h1>
            <form onSubmit={handleSubmit}>
                <label>Blog title:</label>
                <input
                    type="text"
                    required
                    value={title}
                    //function that envokes setTitle to set it to a new value
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label>Blog body:</label>
                <textarea
                    required
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                ></textarea>
                <label>Blog author:</label>
                <select
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                >
                    <option value="mario">mario</option>
                    <option value="yoshi">yoshi</option>
                </select>
                {!isPending && <button>Add Blog</button>}
                {/* this will appear when the request is being sent with json data */}
                {isPending && <button disabled>Adding Blog....</button>}

            </form>
        </div>
    );
}

export default Create;