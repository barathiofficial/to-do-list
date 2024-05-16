import type { Config } from 'drizzle-kit'

export default {
	schema: './src/db/schema.ts',
	out: './src/db/drizzle',
	driver: 'expo',
	dialect: 'sqlite'
} satisfies Config
