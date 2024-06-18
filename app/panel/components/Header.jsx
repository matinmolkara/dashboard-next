import Image from 'next/image'
import React from 'react'
import { Ham, Ham1, Mask, Bell, Triangle, Man } from '../constants/images';



function Header() {
  return (
    <section className="desktop-header-ad">
    <div className="row">
      <div className="col-2 ham-icon-mobile">
        <div className="d-flex align-items-center h-100 toggle-hamburger">
          <Image src={Ham1} alt='toggle menu' width={30} height={30} /> 
        </div>
      </div>
      <div className="col-8 col-lg-6">
        <div className="header-1" >
          <div className="header-1-0">
              <Image src={Mask} alt='logo icon' width={37} height={37}/> 
          </div>
          <div className="header-1-1">
              <a href="index.html">
                  INVEST PACK
              </a>
          </div>
          <div className="header-1-2">
            <button className="toggle-hamburger">
              <Image  src={Ham} alt='hamburger icon' width={30} height={30} />
            </button>
          </div>
      </div>
      </div>
      <div className="col-2 col-lg-6">
        <div className=" notification-desktop">
          <div className="header-2">
            <div className="notification-bar ms-5">
             
              <div className="dropdown bell-desktop">
                  <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                      <div className="header-2-0">
                          <Image src={Bell} alt='notifications' width={36} height={33}/> 
                          <span >
                              5
                              <span className="visually-hidden">unread messages</span>
                          </span>
                      </div>
                  </button>
                  <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    
                      <li><a className="dropdown-item" href="#">
                              <h6>Message Title
                                  <i className="bi bi-circle-fill"></i>
                              </h6>
                              <span>
                                  lorem ipsum dollar sit
                                  lorem ipsum dollar sit
                                  lorem ipsum dollar sit
                              </span>
                          </a></li>
                      <li><a className="dropdown-item dropdown-item-read" href="#">
                              <h6>Message Title</h6>
                              <span>
                                  lorem ipsum dollar sit
                                  lorem ipsum dollar sit
                                  lorem ipsum dollar sit
                              </span>
                          </a></li>
                  </ul>
              </div>
              <div className="dropdown" >
                <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                  <div className="header-2-0-0 d-flex">
                   <div className="header-2-0-0-01">
                    <div>
                      welcome
                    </div>
                    <div>
                      
                      William Tros
                      <Image src={Triangle} alt='menu down' width={10} height={10} /> 
                    </div>
                    
                   </div>
                      <Image src={Man} alt='profile picture' width={37} height={37} /> 
                
                  </div>
              </button>
              <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li className="name-user-desktop"><a className="dropdown-item" href="#">
                          
                  <span className="header-2-0-1">
                    <i className="bi bi-person-circle"></i>
                      William Tros
                     
                  </span>
              </a></li>
                  <li><a className="dropdown-item" href="#">
                          
                          <span className="header-2-0-1">
                            <i className="bi bi-person-gear"></i>
                              Profile
                             
                          </span>
                      </a></li>
                  <li><a className="dropdown-item " href="#">
                          
                          <span className="header-2-0-1 header-2-0-1-0">
                            <i className="bi bi-box-arrow-right"></i>
                              Exit
                              
                          </span>
                      </a></li>
              </ul>
              </div>
          </div>
          </div>
        </div>
      </div>
    </div>
   </section>
  )
}

export default Header