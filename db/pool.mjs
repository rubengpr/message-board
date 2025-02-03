import 'dotenv/config';
import { Pool } from "pg";

// Again, this should be read from an environment variable
export default new Pool({
  connectionString: process.env.DATABASE_URL,
});