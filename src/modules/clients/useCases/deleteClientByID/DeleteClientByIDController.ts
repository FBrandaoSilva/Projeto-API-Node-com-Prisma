import { Request,Response } from "express";
import { DeleteClientByIDUseCase } from "./DeleteClientByIDUseCase";

export class DeleteClientByIDController {
    async handle(request: Request, response: Response){
        const {id} = request.params
        const deleteClientByIDUseCase = new DeleteClientByIDUseCase();

        try{
        const clients = await deleteClientByIDUseCase.execute(id)
        return response.json(clients)

    }   catch(error:any){
        return response.json({message:error.message})
    }

    }
}
