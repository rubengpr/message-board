import 'dotenv/config';
import pg from 'pg'
const { Pool, Client } = pg

// Again, this should be read from an environment variable
export default new Pool({
  connectionString: process.env.DATABASE_URL,
});
