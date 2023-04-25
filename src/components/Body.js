import React, { useEffect, useState } from 'react';
//useEffect  hook to make an API request 

const API_URL = "https://randomfox.ca/floof/"

const Body = () => {

const [image , setImage ] = useState(null)   //image set to  null at first

useEffect(() => {
     fetch("https://randomfox.ca/floof/")
     .then(r => r.json()) //response
     .then(data => setImage(data.image )) // a promise to return actual image

  }, [])




  if (!image ) {
    return <h2>Loading.....</h2>
  }
  
  return (
    <div className="container">
    <img src={image} alt="fox" />
  </div>
  )
}
export default Body




// Inside the callback function, we're using the fetch API to make a GET request to the API_URL.

// we're only passing an empty array as the second argument, which means the effect will only run once, when the component mounts.



//  if image is not available then display loading
// if available display image