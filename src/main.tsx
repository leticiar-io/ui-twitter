import React from "react";
import ReactDOM from "react-dom/client";

import "./global.css";


import { Tweet } from "./components/Tweet";
import { Sidebar } from "./components/Sidebar";
import { Header } from "./components/Header";
import { Separator } from "./components/Separator";

const tweets = [
  'Meu primeiro Tweet',
  'Olha se vc não me ama... então não me ligue',
  'Deu certo tweetar!!'
]

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <div className="layout">
      <Sidebar />

      <div className="content">
        <main className="timeline">
          <Header title={"Home"} />

          <form className="new-tweet-form">
            <label htmlFor="tweet">
              <img src="https://github.com/leticiar-io.png" alt="Letícia" />
              <textarea id="" placeholder="What's happening?" />
            </label>

            <button type="submit">Tweet</button>
          </form>
          <Separator />
          
          {tweets.map(tweet => {
            return <Tweet content={tweet} key={tweet}/>
          })}
        </main>
      </div>
    </div>
  </React.StrictMode>
);
