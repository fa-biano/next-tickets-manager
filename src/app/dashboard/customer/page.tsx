import { Container } from '@/components/container'
import CardCustomer from '@/components/dashboard/customer/card'
import { auth } from '@/lib/auth'
import Link from 'next/link'
import { redirect } from 'next/navigation'

export default async function Customer () {
  const session = await auth()
  if (!session || !session?.user) redirect('/')
  return (
    <Container>
      <main className='mt-9 mb-2'>
        <div className='flex items-center justify-between'>
          <h1 className='text-3xl font-bold'>Meus clientes</h1>
          <Link href='/dashboard/customer/new' className='bg-blue-500 text-white px-4 py-1 rounded'>
            Novo cliente
          </Link>
        </div>

        <section className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-2'>
          <CardCustomer />

          <CardCustomer />

          <CardCustomer />
        </section>


      </main>
    </Container>
  )
}
