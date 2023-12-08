export interface ActiveGameUserGame {
  nameGame: string
  level: string
}

export interface ActiveGamePlayer {
  name: string
  urlPhoto: string
  JR: string
  V: string
  D: string
  myGames: ActiveGameUserGame[]
}

export interface ActiveGameMatch {
  chatData: any[]
  gameName: string
  myData: ActiveGamePlayer
  adversaryData: ActiveGamePlayer
  time: number
  value: number
}

export interface ActiveGameResponse {
  match: ActiveGameMatch
}
