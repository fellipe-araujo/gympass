import { Gym, Prisma } from '../../prisma/generated/prisma/client'

export interface GymsRepository {
  create(data: Prisma.GymCreateInput): Promise<Gym>
  findById(id: string): Promise<Gym | null>
}
