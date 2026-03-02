const { Pool } = require('pg');
require('dotenv').config();

// Create a variable to hold the pool instance
let pool;

if (!pool) {
  const isProduction = process.env.NODE_ENV === "production";
  
  pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    // Add max connections to avoid exhausting your DB
    max: isProduction ? 10 : 2, 
    
    ...(!process.env.DATABASE_URL && {
      user: "postgres",
      host: "localhost",
      database: "PerfumeShop",
      password: process.env.POSTGRES_PASSWORD,
      port: 5432
    }),
    
    ssl: isProduction ? { rejectUnauthorized: false } : false
  });
}

module.exports = pool;