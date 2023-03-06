import { Header } from "../components/Header";
import { Separator } from "../components/Separator";
import { Tweet } from "../components/Tweet";

import './Timeline.css';

const tweets = [
  "Meu primeiro Tweet",
  "Olha se vc não me ama... então não me ligue",
  "Deu certo tweetar!!",
];

export function Timeline() {
   return (
      <main className="timeline">
        <Header title={"Home"} />

        <form className="new-tweet-form">
          <label htmlFor="tweet">
            <img src="https://github.com/leticiar-io.png" alt="Letícia" />
            <textarea id="tweet" placeholder="What's happening?" />
          </label>

          <button type="submit">Tweet</button>
        </form>
        <Separator />

        {tweets.map((tweet) => {
          return <Tweet content={tweet} key={tweet} />;
        })}
    </main>
   )
}