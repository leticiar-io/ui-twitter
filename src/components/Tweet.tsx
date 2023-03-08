import "./Tweet.css";
import { ChatCircle, Heart, ArrowClockwise } from "phosphor-react"
import { Link } from "react-router-dom";

interface TweetProps {
  content: string;
}

export function Tweet( props: TweetProps) {
  return (
    <Link to="/status" className="tweet">
      <img src="https://github.com/leticiar-io.png" alt="Leanderson" />

      <div className="tweet-content">
        <div className="tweet-content-header">
          <strong>Letícia Rodrigues</strong>
          <span>@leticiar_io</span>
        </div>

        <p>
         {props.content}
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
    </Link>
  );
}
