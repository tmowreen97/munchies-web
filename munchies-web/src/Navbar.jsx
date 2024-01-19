import React from 'react';
import styles from './styles';
import { navLinks } from './constants';

const Navbar = () => {
  return (
    <div className='w-screen justify-center items-center'>
      <div className={`${styles.flexCenter}, w-full bg-[#D7E3EA]`}>
        <div>
          <h1 id='title' className='justify-center items-center flex'>TasMunchies</h1>
          <div className='flex'>
            <ul className='list-none justify-center items-center flex'>
              {
                navLinks.map((nav, i)=> {
                  return(
                    <li key={nav.id} className='flex px-2'>
                      <a href={`/#${nav.id}`}>
                        {nav.title}
                      </a>
                    </li>
                  )
                })
              }
            </ul>
            
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default Navbar