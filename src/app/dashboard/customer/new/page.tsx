import { Container } from '@/components/container'
import NewCustomerForm from '@/components/dashboard/customer/form'
import { auth } from '@/lib/auth'
import Link from 'next/link'
import { redirect } from 'next/navigation'

export default async function NewCustomer() {
    const session = await auth()
    if (!session || !session?.user) redirect('/')
  return (
    <Container>
      <main className="flex flex-col mt-9 mb-2">
        <div className="flex items-center gap-3">
          <Link href="/dashboard/customer" className="bg-gray-900 px-4 py-1 text-white rounded">
            Voltar
          </Link>
          <h1 className="text-3xl font-bold">Novo cliente</h1>
        </div>

        <NewCustomerForm userId={session.user.id} />
      </main>
    </Container>
  )
}
