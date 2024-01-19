import React from 'react'
import styles from './styles.js';
import Navbar from './Navbar.jsx';
import Featured from './Featured.jsx';
import About from './About.jsx';

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
          <Featured/>
        </div>
      </div>
      <div className={`${styles.flexCenter}`}>
        <div>
          <About/>
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