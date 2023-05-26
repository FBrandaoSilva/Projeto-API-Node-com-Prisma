import { Request,Response } from "express";
import { ListClientUseCase } from "./ListClientUseCase";

export class ListClientController {
    async handle(request: Request, response: Response){
        const listClientUseCase = new ListClientUseCase();
        const clients = await listClientUseCase.execute()

        return response.json(clients)
    }
}
