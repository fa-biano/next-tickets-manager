'use client'

import { RegisterOptions, useForm, UseFormRegisterReturn } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import Input from '@/components/input'

const schema = z.object({
  name: z.string().min(1, 'O campo nome é obrigatório'),
  email: z.string().email('Digite um email valido.').min(1, 'O email é obrigatório.'),
  phone: z.string().max(11, 'Parece que tem números a mais...').refine((value) => {
    return /^(?:\(\d{2}\)\s?)?\d{9}$/.test(value) || /^\d{2}\s\d{9}$/.test(value) || /^\d{11}$/.test(value)
  }, {
    message: 'O numero de telefone deve estar (DD) 999999999'
  }),
  address: z.string(),
})

type FormData = z.infer<typeof schema>

export default function NewCustomerForm() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema)
  })

  const handleRegister = (data: FormData) => {
    console.log('data', data)
  }

  return (
    <form className='flex flex-col mt-6' onSubmit={handleSubmit(handleRegister)}>
      <label className='mb-1 text-lg font-medium'>Nome completo</label>
      <Input
        type={'text'}
        name={'name'}
        placeholder={'Digite o nome completo...'}
        error={errors.name?.message}
        register={register}      
      />
      <section className='flex gap-2 my-2 flex-col sm:flex-row'>
        <div className='flex-1'>
          <label className='mb-1 text-lg font-medium'>Telefone</label>
          <Input
            type={'number'}
            name={'phone'}
            placeholder={'(XX) 98888-7777'}
            error={errors.phone?.message}
            register={register}      
          />
        </div>

        <div className='flex-1'>
          <label className='mb-1 text-lg font-medium'>Email</label>
          <Input
            type={'email'}
            name={'email'}
            placeholder={'Digite um email válido'}
            error={errors.email?.message}
            register={register}      
          />
        </div>
      </section>

      <label className='mb-1 text-lg font-medium'>Endereço</label>
      <Input
        type={'text'}
        name={'address'}
        placeholder={'Digite seu endereço...'}
        error={errors.address?.message}
        register={register}      
      />

      <button
        type='submit'
        className='bg-blue-500 my-4 px-2 h-11 rounded text-white font-bold hover:cursor-pointer hover:bg-blue-400'
      >
        Cadastrar
      </button>
    </form>
  )
}
