import 'dotenv/config'
import { PrismaPg } from '@prisma/adapter-pg'
import { PrismaClient } from '../../prisma/generated/prisma/client'
import { env } from '@/env'

const connectionString = `${process.env.DATABASE_URL}`
const pgAdapter = new PrismaPg({ connectionString })
const prisma = new PrismaClient({
  adapter: pgAdapter,
  log: env.NODE_ENV === 'dev' ? ['query'] : [],
})

export { prisma }
