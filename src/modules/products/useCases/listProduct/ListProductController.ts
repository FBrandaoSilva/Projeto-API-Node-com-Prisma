import { Request,Response } from "express";
import { ListProductUseCase } from "./ListProductUseCase";

export class ListProductController {
    async handle(request: Request, response: Response){
        const listProductUseCase = new ListProductUseCase();
        const products = await listProductUseCase.execute()

        return response.json(products)
    }
}
