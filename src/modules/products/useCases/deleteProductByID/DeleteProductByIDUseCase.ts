import {prisma} from '../../../../database/prismaClient'

export class DeleteProductByIDUseCase {
    async execute(id: string) {
        const productExistDel = await prisma.products.findFirst({
            where: {
                id: {
                    equals: id
                }
            }
        })

        if(!productExistDel) {
            throw new Error('Produto Não Existente')
            return
        }
        const products = await prisma.products.delete({
            where:{
                id:id
            }   
        })
        return products
    }
}





