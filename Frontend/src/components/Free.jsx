import React,{useEffect,useState} from 'react'
import axios from 'axios';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Card from './Card';

function Free (){
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
        setBook(res.data.filter((data)=>data.category==="free"));
        //Updates the state variable book with the data received from the API response
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  }, []);
  //const filterData=List.filter((data)=>data.category==="free");
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <>
     <div className=" max-w-screen-2xl container mx-auto md:px-20 px-4 ">
      <div><h1 className='font-bold text-xl pb-2'>Free Offered Courses</h1>
      <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Accusantium veritatis alias pariatur ad dolor repudiandae eligendi
            corporis nulla non suscipit, iure neque earum?
          </p></div>
      

      <div><Slider {...settings}>
       {book.map((item)=>(
        <Card item={item} key={item.id}/>
       ))}
      </Slider></div>
      </div> 

    </>
  )
}

export default Free
