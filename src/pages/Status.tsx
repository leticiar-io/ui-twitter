import { Header } from "../components/Header";
import { Separator } from "../components/Separator";
import { Tweet } from "../components/Tweet";

import "./Status.css";

const answers = [
  "Concordo...",
  "Olha, faz sentido!",
  "Parabéns pelo progresso.",
];

export function Status() {
  return (
    <main className="status">
      <Header title={"Tweet"} />

      <Tweet content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla quia maxime necessitatibus, nobis nihil saepe perspiciatis. Possimus, perferendis commodi neque explicabo in veritatis placeat sapiente vel fugit totam tempore tempora?" />
      <Separator />

      <form className="answer-tweet-form">
        <label htmlFor="tweet">
          <img src="https://github.com/leticiar-io.png" alt="Letícia" />
          <textarea id="tweet" placeholder="What's happening?" />
        </label>

        <button type="submit">Tweet</button>
      </form>

      {answers.map((answer) => {
        return <Tweet content={answer} key={answer} />;
      })}
    </main>
  );
}
