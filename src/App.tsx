// import { greet } from "./utils/greet";
import episodes from "./episodes2.json"
import Episode from "./components/Episode"

function App(): JSX.Element {
  const episodeArray = episodes
  return (
    <>
      {episodeArray.map(ep=><Episode
      key={ep.name}
      name={ep.name}
      season={ep.season}
      number={ep.number}
      image={ep.image}
      summary={ep.summary}
      url={ep.url}
      />)}
    </>
  );
}

export default App;
