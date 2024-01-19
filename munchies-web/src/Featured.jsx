import React from 'react'
import styles from './styles'
import { featuredRecipes } from './constants'

const Featured = () => {
  return (
    <div className='w-screen items-center justify-center'>
      <div className={`${styles.flexCenter}`}>
        <h2 className='font-thin'>Featured Recipes</h2>
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