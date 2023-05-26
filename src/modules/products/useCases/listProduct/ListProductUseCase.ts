import {prisma} from '../../../../database/prismaClient'

export class ListProductUseCase {
    async execute() {
        const products = await prisma.products.findMany({
            select:{
                id: true,
                product: true,
                unity:true
            }
        })
        return products
    }
}