// npx json-server --watch data/db.json --port 8000  json server command to watch our db file 
//by wrapping it with some end point e.g(--port 8000) 
// we are using json server to build a fake API
// the file contains 1 property called blogs which is an arrray of 2 other objects
//blog is a top level property and is considered as a resource in json server
//and later creates end points for as to interact with that resource in order to delete it manipulate it etc.
//import { useState } from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";
const Home = () => {

    //   array of blogs
    //const [blogs, setBlogs] = useState([
    // three objects each object represents a single blog with 4 properties
    // { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
    // { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
    // { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
    //])

    // const [blogs, setBlogs] = useState(null)
    // let name = 'mario';
    //useState is just a value of function we are envoking and in order to store it we use const 
    //array structure to grab 2 values in which 1st one is the intial value e.g 'mario' or '25' second 
    //is a function which we use to change that value 
    //const [name, setName] = useState('mario');
    //the value inside can be a boolean array.....
    //const [age, setAge] = useState(25);

    //to use the useFetch hook 
    const { data: blogs, isPending, error } = useFetch(' http://localhost:8001/blogs')

    // const handleClick = (e) => {
    //     console.log('hello ninjas', e);
    // }
    // use name parameter and concatenate the name with hello message
    // const handleClickAgain = (name, e) => {
    //     console.log('hello ' + name, e.target);

    //     //this will trigger react to rerender that component with the changed value
    //     setName('luigi');
    //     setAge(30);
    // }
    //const handleDelete = (id) => {

    //filter the blog with the id passed in the blog list component in the delete button
    //in order to later set Blog to to 
    //blog.id is the id of the blog coming from blog list component and 
    //this is going to be true  if the id of the blog doesnt match id of the data 
    //in which case it will stay and from the new array 
    //if false id does match then  that particular blog will be filtered out
    // const newblogs = blogs.filter(blog => blog.id !== id)
    //that new array is passed as the new state of blogs
    // setBlogs(newblogs);

    //}

    return (
        <div className="home">

            {/* <h2>Home Component</h2> */}
            {/* we cant not pass handleClick() cause that will envoke the function */}
            {/* <button onClick={handleClick}>Click me</button> */}
            {/* we cant pass the name directly like('sadia')cause it will envoke it so first wrap 
            handleClickAgain inside anonymous function and use that function to reference handleClickAgain 
            with the name passed in paranthesis e.g ()=>{ console.log('hello ')}
            The event parameter or object is something we get access to automatically 
            when an event occurs and that object has a ton of properties e.g target 
            syntax to use event in an anonymous function are as follows */}
            {/* <button onClick={(e) => handleClickAgain('mario', e)}>Click me again</button> */}
            {/* to set state of name and age */}
            {/* <p>{name} is {age} years old</p> */}
            {/* a map method cycles through an array  map((blog)=>) map method and the arrow function
             is a callback function which gives a bit of jsx template for each blog  for each iteration
              as we cycle through the array we get access to the item we are curently iterating 
              key property is something that react uses to keep track of the item it is currently outputing
              which in this case is the id */}

            {/* using props property instead of redefining the entire data in bloglist makes the data reusable
            first make a property name on this tag with any name and then pass the data as a dynamic value
             in curly braces ( e.g blogs={blogs}) now thsi is being pass in the BlogList chlid component of 
             parent home as a prop value can be string like title or array of object  like blogs or functions 
             like handleDeleteClick*/}
            {/* conditional templating ,logical end evaluates the left first and if it is not true (blog=null) it does not bother with the tag
            but if it is true then it outputs the blog*/}
            {error && <div>{error}</div>}
            {isPending && <div>is Loading</div>}
            {/* {blogs && <BlogList blogs={blogs} title="All Blogs!" handleDeleteClick={handleDelete} />} */}
            {blogs && <BlogList blogs={blogs} title="All Blogs!" />}

            {/* now to see the reuseability of the blog data 
                to filter data to show the blogs with the author of mario only we use filter method
                which fires a callback function for each item in the array now if we return true for that item it
                kicks in the array if false it filters that item out of the array and returns a new array
                 with the non-filtered items
                 first pass blog as a argument to return true or false and then check if the author property is equal to mario*/}
            {/* <BlogList blogs={blogs.filter((blog) => blog.author === 'mario')} title="Mario Blogs!" /> */}
        </div>
    );
}

export default Home;