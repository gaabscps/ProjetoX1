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
  player1: ActiveGamePlayer
  player2: ActiveGamePlayer
  time: number
  value: number
}

export interface ActiveGameResponse {
  match: ActiveGameMatch
}
