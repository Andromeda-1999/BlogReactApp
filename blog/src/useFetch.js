
import { useState, useEffect } from "react";//in order to make a custom hook
//necessary to start the name function with the word use to make custom hook in react

const useFetch = (url) => {


    const [data, setData] = useState(null);

    //create a loading message while the data is being fetched
    const [isPending, setIsPending] = useState(true);

    //display an error message on the screen when data is not fetched 
    const [error, setError] = useState(null);

    //now this hook runs the function every time the component is rerendered
    //function is fired after every render
    //component renders intially when the page is loaded first time and all of this rendered to the DOM
    //second render is when the state is changed
    //way to run code on every render
    //dont save it in a const it does not return any value 
    //pass a call back function
    //pass a arrow function as an argument
    useEffect(() => {
        //associate the abort controller with a specific fetch request and then use it to stop the fetch
        const abortCont = new AbortController();
        //fetch data and communicate with some sort of authentication 
        // console.log('ran use effect');
        // console.log(name);
        // console.log(age);
        //we are going to fetch our db.json data using these end point components
        // http://localhost:8000/blogs, http://localhost:8000
        // (/blogs GET Fetch all blogs ) (/blogs/{id} GET fetch a single blog)
        // (/blogs POST Add a new blogs ) (/blogs/{id} DELETE delete a blog)
        //to setTimeout function show 1 second load time first parameter is a arrow function next is the timeout time
        setTimeout(() => {
            //rather then hard coding the url pass it into the usefetch function cause url keep on changing
            //fetch(' http://localhost:8000/blogs')//fetch the data at the end point server given in resources
            //way to associate abort control with fetch is to use the signal property
            fetch(url, { signal: abortCont.signal })
                //and this returns as a promise
                //once our fetch promise is resolved then we do something with the response json object
                //other types to handle the data wait from json is call back Async/await Promise
                .then(res => {
                    console.log(res);
                    //response ok property tells that the fetch was ok and we got the data back
                    //if response is not ok then we need to through an error
                    if (!res.ok) {
                        throw Error('Data could not be fetched for that Resource')
                    } else {
                        return res.json();
                    }
                })
                //then we log that data to console
                .then((data) => {
                    console.log(data);
                    setData(data); //set that blog with the json array of object received
                    setIsPending(false);
                    setError(null);
                })
                //this will catch any kind of network error
                //whwn we abort a  fetch the fetch throws an error which is catched in this
                .catch(err => {
                    if (err.name === 'AbortError') {
                        //inorder to recognize the error in which case we do not need to update the state using name property
                        console.log('fetch Aborted')
                    }
                    else {
                        setError(err.message);
                        setIsPending(false);
                        //console.log(err.message);
                    }
                })
        }, 1000)
        //INORDER TO COUTER THE WHICH OCCURS WHEN GOING FROM HOME TO NEWBLOG BECAUSE IT RUNS USE EFFECT EVEN WHEN IT IS IN NEWBLOG WHERE DATA IS NOT NEEDED TO BE OUTPUTED
        // index.js:1 Warning: Can't perform a React state update on an unmounted component. This is a no-op, but it indicates a memory leak in your application. To fix, cancel all subscriptions and asynchronous tasks in a useEffect cleanup function.
        //at Home (http://localhost:3000/static/js/main.chunk.js:518:81)
        //at this point we need to stop the fetch in order to not update the state 
        //this abortCont.abort(); aborts what ever fetch it is associated with which right now is the fetch(url, { signal: abortCont.signal })
        return () => abortCont.abort();
    }, [url]);
    //url is now a dependency every time it changes the useFetch function will rerender 
    //above,[]) is a empty dependency array which will make sure this function runs only at the first render
    // , [name, age]) name and age are now passed as a dependency and use effect will run only when the
    // state of these two property changes



    //now in order to use thevalues which are being set in home component we need to return them first
    //return value could be an array a string even a boolean in our case it is a object with 3 properties
    return { data, isPending, error, }
}

export default useFetch;