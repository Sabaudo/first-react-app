import React from "react";
import { useState } from "react";
import { Tweet } from "./components/Tweet";
import './App.css';

var i = 4
function App() {
  const [tweets, setTweets] = useState<string[]>([
    'Tweet 1',
    'Tweet 2',
    'Tweet 3',
    'Tweet 4'
  ])

  function createTweet() {
    i+=1
    setTweets([...tweets, 'Tweet ' + i])
  }

    return (
      <div>
        {tweets.map(tweet => {
          return <Tweet text={tweet}/>
        })}
        <button onClick={createTweet}>Adicionar Tweet</button>
      </div>
    );

}

export default App
