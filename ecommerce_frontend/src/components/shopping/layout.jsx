import React from 'react'
import { Outlet } from 'react-router-dom'
import ShoppingHeader from './header'

export default function ShoppingLayout() {
  return (
    <div className='flex flex-col overflow-hidden'>
        <ShoppingHeader />
        <main className='flex flex-col w-full'>
            <Outlet />
        </main>
      
    </div>
  )
}
