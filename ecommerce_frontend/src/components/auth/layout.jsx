import React from 'react'
import { Outlet } from 'react-router-dom'

export default function AuthLayout() {
  return (
    <div className='flex min-h-screen w-full home-bg'>
      <div className='hidden lg:flex items-center justify-center w-5/12 px-12'>
        <div className='space-y-6 text-center text-primary-foreground'>
            <h1 className='text-3xl font-bold tracking-tight'>Welcome to E-CommHub</h1>
            <p className='text-sm text-slate-300'>Discover the joy of shopping from the comfort of your home.</p>
            <p>🛒🛒🛒</p>
        </div>
      </div>
      <div className='flex flex-1 items-center justify-center bg-primary-foreground px-4 py-12 sm:px-6 lg:px-8'>
        <Outlet/>
      </div>
    </div>
  )
}
