import React from 'react'
import styles from './styles'
import { featuredRecipes } from './constants'

const Featured = () => {
  return (
    <div className='w-screen items-center justify-center'>
      <div className='inline-flex w-full justify-center items-center'>
        <hr class="w-64 h-px my-8 bg-gray-200 border-0 rounded dark:bg-gray-700"/>
        <div className='absolute'>
          <h2 className='font-thin'>Featured</h2>
        </div>
        <hr class="w-64 h-px my-8 bg-gray-200 border-0 rounded dark:bg-gray-700"/>
      </div>
      <div className={`${styles.flexCenter}`}>
        {featuredRecipes.map((recipe, i)=> {
          return(
              <img src={`${recipe.img}`} width={300} className='m-2 max-h-[400px]'/>
          )
        })}
      </div>

    </div>
  )
}

export default Featured