import { StaticImageData } from 'next/image'
import { Status } from './Status'

export type User = {
  userImage: StaticImageData
  userName: string
  gamesPlayed: string
  gamesVictory: string
  gamesDefeat: string
  status?: Status
}
