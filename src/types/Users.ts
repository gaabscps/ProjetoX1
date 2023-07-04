import { StaticImageData } from 'next/image'

export type User = {
  userImage: StaticImageData
  userName: string
  gamesPlayed: string
  gamesVictory: string
  gamesDefeat: string
}
