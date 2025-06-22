import { Container } from '@/components/container'
import { auth } from '@/lib/auth'
import { redirect } from 'next/navigation'

export default async function Dashboard() {
  const session = await auth()
  if (!session || !session?.user) redirect('/')
    
  return (
    <Container>
      <h1>Página dashboard</h1>
    </Container>
  )
}
