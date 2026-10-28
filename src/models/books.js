import { getDb } from '../db/connect.js';

export const getAllBooks = async () => {
  const db = getDb();
  const collection = db.collection('books');
  const books = await getDb().collection('books').find({}).toArray();
  return books;
};
