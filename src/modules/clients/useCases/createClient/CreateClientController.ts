import { Request,Response } from "express";

import { CreateClientUseCase } from "./CreateClientUseCase";

export class CreateClientController {
    async handle(request: Request, response: Response) {
        const {name, email,telephone} = request.body;

        const createClientUseCase = new CreateClientUseCase();
        try{
        const result = await createClientUseCase.execute({
            name,
            email,
            telephone
        })
        return response.json(result)
    }   catch(error:any){
        return response.json({message:error.message})
    }
    
    }
}