import {prisma} from '../../../../database/prismaClient'

interface CreateProduct {
    product: string;
    unity: string;
}


export class CreateProductUseCase {
    async execute({product, unity}: CreateProduct){
        product=product.toLowerCase()
        unity=unity.toLowerCase()


        const data ={
            product,
            unity
            
        }

        const products = await prisma.products.create({ data })

        return products
    }
}