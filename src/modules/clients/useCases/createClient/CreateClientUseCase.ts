import {prisma} from '../../../../database/prismaClient'

interface CreateClient {
    name: string;
    email: string;
    telephone: string;
}


export class CreateClientUseCase {
    async execute({name, email,telephone}: CreateClient){
        name=name.toLowerCase()
        email=email.toLowerCase()
        telephone=telephone.toLowerCase()

        const TelExist = await prisma.clients.findFirst({
            where: {
                telephone: {
                    equals: telephone
                }
            }
        })

        if(TelExist) {
            throw new Error('Telefone Existente')
            return
        }
        const emailExist = await prisma.clients.findFirst({
            where: {
                email: {
                    equals: email
                }
            }
        })

        if(emailExist) {
            throw new Error('Email Existente')
            return
        }


        const data ={
            name,
            email,
            telephone
        }

        const client = await prisma.clients.create({ data })

        return client
    }
}