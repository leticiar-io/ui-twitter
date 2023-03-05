import "./Tweet.css";
import { ChatCircle, Heart, ArrowClockwise } from "phosphor-react"

export function Tweet() {
  return (
    <a href="#" className="tweet">
      <img src="https://github.com/Leanderson01.png" alt="Leanderson" />

      <div className="tweet-content">
        <div className="tweet-content-header">
          <strong>Leanderson Nunes</strong>
          <span>@Leanderson01</span>
        </div>

        <p>
          Acabei de migrar um projeto React GIGANTE de create-react-app para <br />
          Vite e os resultados foram: <br />
          ✅ npm start: De 32s para 400ms (sim, demorava 30s) <br /> 
          ✅ npm build: De 120s para 22s Além disso, troquei do Yarn para o PNPM e o install das deps mudou de 24s para 8s 🔥 
        </p>

        <div className="tweet-content-footer">
            <button type="submit">
               <ChatCircle />
               20
            </button>
            <button type="submit">
               <ArrowClockwise />
               20
            </button>
            <button type="submit">
               <Heart />
               20
            </button>
        </div>
      </div>
    </a>
  );
}
