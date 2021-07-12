export function upCase (s: string): string {
    return s.toUpperCase()
}


export function makeEpisodeCode (seasonNum: number, episodeNum: number):string {
    return "s" + seasonNum + " " + episodeNum 
}