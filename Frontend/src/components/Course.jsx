import React, { useEffect, useState } from 'react'
import Card from './Card'
//import List from '../../public/List.json'
import {Link} from 'react-router-dom'
import axios from 'axios'

function Course() {
  const [book, setBook] = useState([]);
  //intial state=empty array book starts as empty
  useEffect(() => {
    //useEffect hook lets you perform side effects in function components
    //Common examples of side effects include:
//Fetching data from an API,Updating the DOM directly,Setting up a subscription or timer,Logging to the console
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:4001/book");
        //Declares a constant res to store the response from the API call.
        //Makes a GET request to the specified URL using axios, an HTTP client for making requests.
        console.log(res.data);
        setBook(res.data);
        //Updates the state variable book with the data received from the API response
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  }, []);
  //The empty dependency array ensures that the useEffect hook runs only once, after the initial render. If there were dependencies in the array, the effect would re-run whenever those dependencies change.
  return (
    <>
  <div className=" max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-28 items-center justify-center text-center">
          <h1 className="text-2xl  md:text-4xl font-bold">
            We're delighted to have you{" "}
            <span className="text-pink-500 font-bold"> Here! :)</span>
          </h1>
          <p className="mt-12 ">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro,
            assumenda? Repellendus, iste corrupti? Tempore laudantium
            repellendus accusamus accusantium sed architecto odio, nisi expedita
            quas quidem nesciunt debitis dolore non aspernatur praesentium
            assumenda sint quibusdam, perspiciatis, explicabo sequi fugiat amet
            animi eos aut. Nobis quisquam reiciendis sunt quis sed magnam
            consequatur!
          </p>
          <Link to="/">
          <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
              Back
            </button>
            </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
          {book.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </div>
  </div>
    </>
  )
}

export default Course
