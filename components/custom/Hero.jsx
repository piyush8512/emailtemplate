import React from 'react'
import { Button } from '../ui/button'

const Hero = () => {
  return (
    <div className='px-10 md :px-28 lg:px-44 xl:px-56 flex flex-col justify-center items-center mt-24'>
      <h2 className='font-extrabold text-5xl text-center   '> Ai powerred email templates </h2>
      <p className='text-2xl mt-5 text-center justify-center f'> Create and send emails with AI powered templates Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate est voluptatibus magnam, quae enim saepe iure. Quos fuga iusto ullam, iste quo soluta ducimus, dolorem aliquam enim libero esse cupiditate.</p>
      <div className='flex gap-5 mt-12'>
        <Button variant='outline'>
            try Demo
        </Button>
        <Button>
            Get Started
        </Button>
      </div>
    </div>
  )
}

export default Hero
