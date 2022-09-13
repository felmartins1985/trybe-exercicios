// ./controllers/books.controller.ts

import { Request, Response } from 'express';
import ProductService from '../services/productService';
import {IProduct} from '../interfaces';

class ProductsController {
  constructor(private productService = new ProductService()) { }//<-- e essa chave?

  public getAll = async (_req: Request, res: Response) => {
    const productsAll = await this.productService.getAll();
    const {products,status}=productsAll
    res.status(status).json(products);
  };
  public getById = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const productGetById = await this.productService.getById(id);
    if (!productGetById) {
      return res.status(404)
        .json({ message: 'Book not found!'});
    }
    res.status(200).json(productGetById);
  }
  public create = async (req: Request, res: Response) => {
    const product = req.body as IProduct;
    const productCreated = await this.productService.create(product);
    res.status(201).json(productCreated);
  };
  public update = async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const productUpdt = req.body as IProduct;
    const { status, updt, error } = await this.productService.update(id, productUpdt);
    return error
    ? res.status(status).json({ error })
    : res.status(status).json(updt);
  };
  public remove = async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const { status, rmv, error } = await this.productService.remove(id);

    return error
    ? res.status(status).json({ error })
    : res.status(status).json(rmv);
  };
  public async getAllByPriceRange(req: Request, res: Response) {
    const { start, end } = req.query;
    const { status, data, error } = await this.productService
      .getAllByPriceRange(Number(start), Number(end));
    return error
      ? res.status(status).json({ error })
      : res.status(status).json(data);
  }
  public async getAllNotExpired(_req: Request, res: Response) {
    const { status, data } = await this.productService.getAllNotExpired();
    res.status(status).json(data);
  }
}

export default ProductsController;