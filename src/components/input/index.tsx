'use client'

import { RegisterOptions, UseFormRegister } from 'react-hook-form'
import { FormData } from '@/components/dashboard/customer/form'

interface InputProps {
  type: string
  placeholder: string
  name: keyof FormData
  register: UseFormRegister<FormData>
  error?: string
  rules?: RegisterOptions<FormData>
}

export default function Input({ name, placeholder, type, register, rules, error }: InputProps) {
  return (
    <>
      <input
        className='w-full border-2 rounded-md h-11 px-2'
        placeholder={placeholder}
        type={type}
        {...register(name, rules)}
        id={name}
      />
      {error && <p className='text-red-500 my-1'>{error}</p>}
    </>
  )
}
