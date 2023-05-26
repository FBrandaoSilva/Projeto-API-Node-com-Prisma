import { Request,Response } from "express";
import { DeleteProductByIDUseCase } from "./DeleteProductByIDUseCase";

export class DeleteProductByIDController {
    async handle(request: Request, response: Response){
        const {id} = request.params
        const deleteProductByIDUseCase = new DeleteProductByIDUseCase();

        try{
        const products = await deleteProductByIDUseCase.execute(id)
        return response.json(products)

    }   catch(error:any){
        return response.json({message:error.message})
    }

    }
}
