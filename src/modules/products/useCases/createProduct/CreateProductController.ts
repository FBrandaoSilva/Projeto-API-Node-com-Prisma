import { Request,Response } from "express";

import { CreateProductUseCase } from "./CreateProductUseCase";

export class CreateProductController {
    async handle(request: Request, response: Response) {
        const {product, unity} = request.body;

        const createProductUseCase = new CreateProductUseCase();
        try{
        const result = await createProductUseCase.execute({
            product,
            unity
            
        })
        return response.json(result)
    }   catch(error:any){
        return response.json({message:error.message})
    }
    
    }
}