'use client'

import { SessionProvider, SessionProviderProps } from 'next-auth/react'

export function NextAuthSessionProvider({ children }: SessionProviderProps ) {
  return <SessionProvider>{children}</SessionProvider>
}
