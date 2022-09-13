// ./services/books.service.ts

import connection from '../models/connection';
import ProductModel from '../models/productModel';
import {IProduct} from '../interfaces';

const MESSAGES = {
  PRODUCT_NOT_FOUND: 'Product not found',
};


class ProductService {
  public model: ProductModel;

  constructor() {
    this.model = new ProductModel(connection);
  }

  public async getAll() {
    const products = await this.model.getAll();
    return {status: 200, products};
  }
  public async getById(id: number) {
    const data = await this.model.getById(id);

    if (data === null) return { status: 404, error: { message: MESSAGES.PRODUCT_NOT_FOUND } };
    return { status: 200, data }
  }
  public async create(product: IProduct) {
    const data= await this.model.create(product);
    return {status: 201, data};
  }
  public async update(id: number, product: IProduct){
    const data = await this.model.getById(id);
    if (!data) { 
      return { status: 404, error: { message: MESSAGES.PRODUCT_NOT_FOUND } };
    }
    const updt= await this.model.update(id, product);
    return {status: 200, updt};
  }
  public async remove(id: number) {
    const data = await this.model.getById(id);
    if (!data) { 
      return { status: 404, error: { message: MESSAGES.PRODUCT_NOT_FOUND } };
    }
    const rmv= await this.model.remove(id);
    return {status: 200, rmv};
  }
  public async getAllByPriceRange(start: number, end: number) {
    if (Number.isNaN(start) || Number.isNaN(end)) {
      return { status: 401, error: { message: '"start" and "end" params must be numbers' } };
    }
    if (start > end) {
      return { status: 401, error: { message: '"end" param must be greater than "start"' } };
    }
  
    const data = await this.model.getAllByPriceRange(start, end);
  
    return { status: 200, data };
  }
  public async getAllNotExpired() {
    const data = await this.model.getAllNotExpired();
    return { status: 200, data };
  }
}

export default ProductService;