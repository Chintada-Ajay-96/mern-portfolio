import React, { useState } from 'react'; 
import Home from '../../pages/Home/Home';
import { AiOutlineArrowLeft,AiOutlineArrowRight } from "react-icons/ai";
import './Layout.css'
import Menus from '../Menus/Menus';

const Layout = () => {
    const [toggle,setToggle]= useState(true);

    //change toggle
    const handleToggle=  () =>{
        setToggle(toggle =>!toggle);
    }

  return (
    <>
      <div  className="sidebar-section">
        <div className={toggle ? "sidebar-toggle " : "sidebar"}>

            <div className='sidebar-toggle-icons'>
              
                <p onClick={handleToggle}>
                    {
                        toggle?(<AiOutlineArrowLeft size={30} />

                        ):(<AiOutlineArrowRight size={30} />)
                    }
                    
                </p>
            </div>
             <Menus toggle={toggle} />
        </div>
            <div className="container">
                <Home/>
            </div>
      </div>

    </>
  )
}

export default Layout
