import React  from 'react';
import { useState,useEffect } from 'react';
import './App.css';

function App() {
  const [quote,setQuote]=useState("Please click the Button to generate new quote");
  const[author,setAuthor]=useState("");
/*useEffect(() => {
    fetch("http://api.quotable.io/random")
      .then(res => res.json())
      .then(
        (quote) => {
          setQuote(quote.content);  
          setAuthor(quote.author);
        }
      ).catch(()=>{
        console.log("error")
      })
  },[]);*/
  let fetchNewQuote = () => {
    fetch("http://api.quotable.io/random")
      .then(res => res.json())
      .then(
        (quote) => {
          setQuote(quote.content);  
          setAuthor(quote.author);
        }
      ).catch(()=>{
        console.log("error")
      })
  }
  
  return (
    <div className="App">
    <h1>Random Quote Generator</h1>
    <br />
    <br />
    <br />
     <div className='quote'>
      <h2>{quote}</h2>
      <small>-{author}-</small>
     </div>
     <button className='btn' onClick={fetchNewQuote}>Generate New Quote</button>
    </div>
  );
}

export default App;
