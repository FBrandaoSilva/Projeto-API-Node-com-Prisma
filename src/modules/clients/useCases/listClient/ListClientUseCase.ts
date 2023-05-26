import {prisma} from '../../../../database/prismaClient'

export class ListClientUseCase {
    async execute() {
        const clients = await prisma.clients.findMany({
            select:{
                id: true,
                name: true,
                email:true,
                telephone:true
            }
        })
        return clients
    }
}