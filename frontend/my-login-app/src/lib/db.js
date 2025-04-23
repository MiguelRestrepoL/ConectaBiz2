// lib/db.js
import { Pool } from 'pg';

let pool;

if (!global.__pgPool) {
  global.__pgPool = new Pool({
    connectionString: process.env.DATABASE_URL,
  });
}

pool = global.__pgPool;
export default pool;
