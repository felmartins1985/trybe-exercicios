// ./models/book.model.ts

import { Pool, ResultSetHeader } from 'mysql2/promise';
import {Product, IProduct} from '../interfaces/';

export default class ProductModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getAll(): Promise<Product[]> {
    const result = await this.connection
      .execute('SELECT * FROM Products');
    const [products] = result;
    return products as Product[];
  }
////////////////////////////////////////////////////
public async getById(id: number): Promise<Product|null> {
  const result = await this.connection
    .execute('SELECT * FROM Products WHERE id=?', [id]);
  const [data] = result;
  const [product] = data as Product[];
  return product||null;
}
////////////////////////////////////////////////////
  public async create(product: IProduct): Promise<Product> {
    const { name, brand, price, manufacturingDate, expirationDate } = product;
    const result = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Products ( name, brand, price, manufacturingDate, expirationDate) VALUES (?, ?, ?, ?, ?)',
      [ name, brand, price, manufacturingDate, expirationDate],
    );
    const [dataInserted] = result;
    const { insertId } = dataInserted;
    return {...product, id: insertId };
  }
////////////////////////////////////////////////////
public async update(id: number, product: IProduct): Promise<Product> {
  const { name, brand, price, manufacturingDate, expirationDate } = product;
  await this.connection.execute(
    'UPDATE Products SET name=?,brand=?,price=?,manufacturingDate=?,expirationDate=? WHERE id=?',
    [name, brand, price, manufacturingDate,expirationDate, id]
  );
  const editedProduct: Product = { id, ...product };
  return editedProduct;
}

//////////////////////////////////////
  public async remove(id: number): Promise<Product|null> {
    const productToBeDeleted = await this.getById(id);
    if (!productToBeDeleted) return null;
  
    await this.connection.execute(
    'DELETE FROM Products WHERE id=?',
    [id],
    );
    return productToBeDeleted;
  }
  public async getAllByPriceRange(start: number, end: number): Promise<Product[]> {
  
    const [products] = await this.connection.execute('SELECT * FROM Products WHERE price >= ? AND price <= ?', [start, end]);
  
    return products as Product[];
  }
  public async getAllNotExpired(): Promise<Product[]> {
    const currentTime = new Date().toISOString().slice(0, 10);
  
    const query = 'SELECT * FROM Products WHERE expiration_date >= ?';
    const values = [currentTime];
  
    const [products] = await this.connection.execute(query, values);
  
    return products as Product[];
  }
}