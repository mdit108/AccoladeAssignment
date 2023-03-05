import React, { Component } from "react";
import { useState } from "react";
import Slide from "react-reveal";



  


function Exercise() {
  const [data, setData] = useState({data: []});
  const [isLoading, setIsLoading] = useState(false);
  const [err, setErr] = useState('');
  const [name,setName] = useState('');
  const [gifUrl,setGifUrl] = useState('');
  const [exname,setExname] = useState('')
  let url = 'https://exercisedb.p.rapidapi.com/exercises/name/'+name;
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '28f06de9bcmsh193b99d1efb4c50p1726bfjsna49cbcb3cb8f',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };
  const getInputValue = (event)=>{
        // show the user input value to console
        setName(event.target.value);


    };
  const handleClick = async () => {

    try {
      await fetch(url, options)
	    .then(res => res.json())
	    .then(json => {
        console.log(json)
        //console.log(json[0])
        setGifUrl(json[0].gifUrl)
        setExname(json[0].name)
      })
	    .catch(err => console.error('error:' + err));
      console.log(gifUrl)
    }
    catch(e){
      console.log(e)
    }
};

  return (
    <section id = "resume">
          <div className="row education">
            <h3>Enter the name of the body part</h3>
            <input type="text" onChange={getInputValue}/>
          </div>
          <div className="row education">
            <button className="btn button" onClick={handleClick}>Fetch Exercise</button>
          </div>
          
          <div className="row education">
            <h3 style={{textTransform: 'capitalize'}}> {exname} </h3>
            <img className = ""src={gifUrl} alt="" />
          </div>
        </section>
  )
}

export default Exercise


