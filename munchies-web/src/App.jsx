import React from 'react'
import styles from './styles.js';
import Navbar from './Navbar.jsx';

const App = () => {
  return (
    <div>
      <div  className={`${styles.flexCenter}`}>
        <div>
          <Navbar/>
        </div>
      </div>
      <div className={`${styles.flexCenter}`}>
        <div>
          Featured Recipes
        </div>
      </div>
      <div className={`${styles.flexCenter}`}>
        <div>
          About
        </div>
      </div>
      <div className={`${styles.flexCenter}`}>
        <div>
          Contact
        </div>
      </div>
        
    </div>
      
  )
}

export default App