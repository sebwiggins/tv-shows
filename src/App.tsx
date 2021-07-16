// import { greet } from "./utils/greet";
// import episodes from "./episodes2.json";
import Episode from "./components/Episode";
import { IEpisode } from "./components/Episode";
import { useEffect, useState } from "react";

function App(): JSX.Element {
  const [episodes, setEpisode] = useState<IEpisode[]>([]);

  useEffect(() => {
    const handleGetEpisode = async () => {
      const response = await fetch(
        "https://api.tvmaze.com/shows/38963/episodes"
      );
      const jsonBody: IEpisode[] = await response.json();
      setEpisode(jsonBody);
    };
    handleGetEpisode();
  }, []);

  const [searchTerm, setSearchTerm] = useState("");

  function getFilteredEpisodes() {
    if (episodes === undefined) {
      return [];
    } else {
      return episodes.filter(
        (val) =>
          val.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          val.summary.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
  }

  const [dropbar, setDropbar] = useState("");

  function getDropdownEpisodes() {
    if (episodes === undefined) {
      return [];
    } else {
      return episodes.filter((ep) => ep.name === dropbar);
    }
  }

  function dropOrFilter() {
    if (dropbar === "") {
      return getFilteredEpisodes();
    } else {
      return getDropdownEpisodes();
    }
  }

  return (
    <>
      <div>
        <input
          type="text"
          placeholder="Search..."
          onChange={(event) => {
            setSearchTerm(event.target.value);
          }}
        />
        <p>
          {/* Showing {getFilteredEpisodes.length}/{episodes.length} episodes */}
        </p>
      </div>

      <label htmlFor="Episodes">Choose an episode:</label>
      <select
        name="Episodes"
        id="Episodes"
        onChange={(event) => {
          setDropbar(event.target.value);
        }}
      >
        <option value="">...</option>
        {episodes.map((ep) => (
          <option key={ep.name}>{ep.name}</option>
        ))}
      </select>

      {dropOrFilter().map((ep) => (
        <Episode
          key={ep.name}
          name={ep.name}
          season={ep.season}
          number={ep.number}
          image={ep.image}
          summary={ep.summary}
          url={ep.url}
        />
      ))}
    </>
  );
}

export default App;
