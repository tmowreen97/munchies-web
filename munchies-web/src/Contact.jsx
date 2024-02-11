import React from 'react'
import styles from './styles'
import { featuredRecipes } from './constants'

const Contact = () => {
  return (
    <div className='w-screen items-center justify-center'> 
      <div className='inline-flex w-full justify-center items-center'>
        <hr class="w-64 h-px my-8 bg-gray-200 border-0 rounded dark:bg-gray-700"/>
        <div className='absolute'>
          <h2 className='font-thin'>Contact</h2>
        </div>
        <hr class="w-64 h-px my-8 bg-gray-200 border-0 rounded dark:bg-gray-700"/>
      </div> 
      <div className='flex justify-center items-center'>
        <div className=''>
          <p className='bg-[#D9D9D9] rounded w-full justify-center'>Name</p>
          <p>Email</p>
          <p>Subject</p>
          <p>Message</p>
        </div>
      </div>   
    </div>
  )
}

export default Contact
