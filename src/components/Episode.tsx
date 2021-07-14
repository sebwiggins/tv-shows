import { makeEpisodeCode, replaceText } from "../utils/episodeUtils";

interface IEpisode {
  // id: number;
  url: string;
  name: string;
  season: number;
  number: number;
  // type: string;
  // airdate: string;
  // airtime: string;
  // airstamp: string;
  // runtime: number;
  image: {
    medium: string;
    // original: string;
  };
  summary: string;
  // _links: { self: { href: string } };
}

function Episode(props: IEpisode): JSX.Element {
  return (
    <section>
      <h1>
        {props.name} {"-"} {makeEpisodeCode(props.season, props.number)}
      </h1>
      <img src={props.image.medium} alt="Episode Artwork" />
      <p>Summary: {replaceText(props.summary)}</p>
      <p>
        (<a href={props.url}>TVMaze</a>)
      </p>
    </section>
  );
}

export default Episode;
