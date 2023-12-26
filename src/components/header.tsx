import Link from 'next/link'
import React from 'react'
import Nav from './nav'

const header = () => {
  return (
    <header className='flex justify-between items-center py-4 px-7 border-b'>
        <Link href="/">
        {/* <Image 
            src=""
            alt="logo"
            className="h-[35px] w-[35px]"
            width="50"
            height="50"
        /> */}
        </Link>
        <Nav />
    </header>
  )
}

export default header