import React from 'react'
import styles from './styles'

const About = () => {
  return (
    <div className='w-screen items-center justify-center'>
      <div className='inline-flex w-full justify-center items-center'>
        <hr class="w-64 h-px my-8 bg-gray-200 border-0 rounded dark:bg-gray-700"/>
        <div className='absolute'>
          <h2 className='font-thin'>About</h2>
        </div>
        <hr class="w-64 h-px my-8 bg-gray-200 border-0 rounded dark:bg-gray-700"/>
      </div>
      <div className={`${styles.flexCenter} mx-[10%] gap-24`}>
        <div>
          <p>
            Welcome to TasMunchies!</p>
          <p>
            I’m Tasreen and I love to bake and create treats blah blah blah. Here you can find recipes to all the posts on my Instagram, and more! Feel free to reach out to me for any comments or questions.
          </p>
        </div>
        
        <img src='src/assets/selfie.jpeg' width={500} height={400}/>
      </div>

    </div>
  )
}

export default About