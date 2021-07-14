export function makeEpisodeCode(seasonNum: number, episodeNum: number): string {
  if (episodeNum >= 10 && seasonNum >= 10) {
    return "S" + seasonNum + "E" + episodeNum;
  } else {
    return "S0" + seasonNum + "E0" + episodeNum;
  }
}

export function replaceText(text: string): string {
  if (text.includes("<p>")) {
    return text.replace("<p>", "").replace("</p>", "").replace("<br />", "");
  } else {
    return text;
  }
}
