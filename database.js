import mysql from 'mysql2';
import dotenv from 'dotenv';

dotenv.config();

const db = mysql.createPool({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
}).promise();

export async function getProducts() {
  const [reuslt] = await db.query(`SELECT * FROM products`);
  return reuslt;
}

export async function getProductById(id) {
  const [reuslt] = await db.query(`SELECT * FROM products WHERE id = ?`, [id]);
  return reuslt[0];
}

export async function createProduct(title, descript, image) {
  const [reuslt] = await db.query(
    `INSERT INTO products (title, description, image, created_at, updated_at) VALUES (?, ?, ?, NOW(), NOW())`, 
    [ title, descript, image ],
  );
  const id = reuslt.insertId;
  return getProductById(id);
}
