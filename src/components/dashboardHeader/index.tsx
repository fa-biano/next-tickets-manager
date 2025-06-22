import { Container } from '../container'
import Link from 'next/link'

export default function DashBoardHeader () {
  return (
    <Container>
      <header className='w-full bg-gray-900 my-4 p-3 rouded flex gap-4'>
        <Link
          href={'/dashboard'}
          className='text-white hover:font-bold duration-300'
        >
          Chamados
        </Link>
        
        <Link
          href={'/dashboard/customer'}
          className='text-white hover:font-bold duration-300'
        >
          Clientes
        </Link>
      </header>
    </Container>
  )
}
