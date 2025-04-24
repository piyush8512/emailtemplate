import React from 'react'
import Image from 'next/image'
import { Button } from '../ui/button'

const Header = () => {
  return (
    <div className=' flex justify-between items-center p-4 shadow-md px-10'>
      
      <Image src = {'/logo.svg'} alt='logo' width={100} height={100}/>
      <di>
        <Button>Get Started</Button>
      </di>
    </div>
  )
}

export default Header

