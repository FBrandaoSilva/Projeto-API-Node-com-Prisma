import {prisma} from '../../../../database/prismaClient'

export class DeleteClientByIDUseCase {
    async execute(id: string) {
        const clientExistDel = await prisma.clients.findFirst({
            where: {
                id: {
                    equals: id
                }
            }
        })

        if(!clientExistDel) {
            throw new Error('Cliente Não Existente')
            return
        }
        const clients = await prisma.clients.delete({
            where:{
                id:id
            }   
        })
        return clients
    }
}





