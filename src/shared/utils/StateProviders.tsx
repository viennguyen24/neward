'use client'

import { Provider } from 'jotai'
import React from 'react'

export default function StateProviders({ children } : { children : React.ReactNode}) {
  return (
    <Provider>
      {children}
    </Provider>
  )
}