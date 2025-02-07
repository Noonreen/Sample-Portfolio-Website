"use client"

import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

const page = () => {
  const router = useRouter();

  return (
    <div>
      <h1>Contact Page</h1>
    <button className='bg-blue-200 rounded-md p-1 ' onClick={()=> router.push("/")}> home</button>

    </div>
  )
}

export default page