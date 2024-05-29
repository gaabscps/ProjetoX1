import { GamesList } from './GamesList'

export interface Profile {
  V?: number
  JR?: number
  D?: number
  _id: string
  nickname: string
  following: string
  followers: string
  xp: string
  games: UserGames[]
  timesChangelled: string
  timesyouChangelled: string
  gamesPlayed: string
  balance: string
  idUser: string
  urlPhoto: string
  youFollow: boolean
  createdAt: string
  updatedAt: string
  __v: number
}

export interface Location {
  Country: string
  CountryFlag: string
}

interface Notifications {
  Content: any[] // Substitua 'any' pelo tipo específico do conteúdo das notificações, se necessário
  Quantity: number
}

interface MatchArena {
  ChallengeReceive: number
  ChallangeInvited: number
  status: string
  onlinePlayers: number
}

export interface Dashboard {
  Profile: Profile
  Location?: Location
  Notifications?: Notifications
  MatchArena?: MatchArena
}

export interface UserGames {
  _id: string
  urlPhoto: string
  level: string
  matchPlayed: string
  matchWin: string
  matchDeafet: string
  gameId: string
  name: string
}

export interface AvailableGames {
  _id: string
  name: string
  urlPhoto: string
  gameId: string
}
