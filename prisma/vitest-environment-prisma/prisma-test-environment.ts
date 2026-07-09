import { Environment } from 'vitest/runtime'

export default <Environment>{
  name: 'prisma',
  async setup() {
    console.log('Setup')

    return {
      async teardown() {
        console.log('Teardown')
      },
    }
  },
}
