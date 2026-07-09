import { defineConfig } from 'vitest/config'

export default defineConfig({
  resolve: { tsconfigPaths: true },
  test: {
    environmentMatchGlobs: [['src/http/controllers/**', 'prisma']],
  },
})
