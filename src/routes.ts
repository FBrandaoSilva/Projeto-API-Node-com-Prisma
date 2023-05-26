import { Router } from "express";

const routes = Router();

import { CreateClientController } from "./modules/clients/useCases/createClient/CreateClientController";
import { ListClientController } from "./modules/clients/useCases/listClient/ListClientController";
import { DeleteClientByIDController } from "./modules/clients/useCases/deleteClientByID/DeleteClientByIDController";

import { CreateProductController } from "./modules/products/useCases/createProduct/CreateProductController";
import { ListProductController } from "./modules/products/useCases/listProduct/ListProductController";
import { DeleteProductByIDController } from "./modules/products/useCases/deleteProductByID/DeleteProductByIDController";

const createClientController = new CreateClientController()
const listClientController = new ListClientController()
const deleteClientByIDController = new DeleteClientByIDController()

const createProductController = new CreateProductController()
const listProductController = new ListProductController()
const deleteProductByIDController = new DeleteProductByIDController

routes.post('/client',createClientController.handle);
routes.get('/client',listClientController.handle);
routes.delete('/client/:id',deleteClientByIDController.handle);

routes.post('/product',createProductController.handle);
routes.get('/product',listProductController.handle);
routes.delete('/product/:id',deleteProductByIDController.handle);

export {routes}