// add caching in GET routes
// export const dynamic = 'force-static'

import { auth } from '@/lib/auth'
import prismaClient from '@/lib/prisma'
import { FormData } from '@/components/dashboard/customer/form'

export const POST = async (request: Request) => {
  const session = await auth()
  if (!session || !session?.user) return Response.json({ message: 'Unauthorized' }, { status: 401 })
    
  const body: FormData & { userId: string } = await request.json()
  const { name, phone, email, address, userId } = body

  try {
    const response = await prismaClient.customer.create({
      data: {
        name,
        phone,
        email,
        address: address ?? '',
        userId,
      }
    })

    return Response.json({ response, message: 'Customer successfully registered!' })
  } catch (error) {
    console.log('Customer POST Error:', error)
    return Response.json({ message: 'Failed to create new customer' }, { status: 400 })
  }
}
