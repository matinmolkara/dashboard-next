'use client'
import Image from 'next/image';

import Link from 'next/link';
import { usePathname } from 'next/navigation'

function Sidebar() {
const currentPath = usePathname();
const menuIcons =[
    {
        src:'/panel/dashboard',
        iconName:'Dashboard',
        path: "../../sidebar/menu.svg",
     
    },
    {
        src:'/panel/deposit',
        iconName:'Deposit',
        path:"../../sidebar/deposit.svg",
       
    },
    {
        src:'/panel/withdraw',
        iconName:'Withdrawal',
        path:"../../sidebar/withdrawal.svg",
      
    },
    {
        src:'/panel/investment',
        iconName:'Investments',
        path:"../../sidebar/operational.svg",
    
    },
    {
        src:'/panel/special',
        iconName:'Special Events',
        path:"../../sidebar/badge.svg",
      
    },
    {
        src:'/panel/contact',
        iconName:'Contact',
        path:"../../sidebar/telephone.svg",

    },
    {
        src:'/panel/setting',
        iconName:'Settings',
        path:"../../sidebar/settings.svg",
      
    },
    {
        src:'/panel/logout',
        iconName:'Sign Out',
        path:"../../sidebar/sign.svg",
        
    }

]



  return (
    <div className="menu-side-desktop">
            <div className="side-menu">
              <div className="side-menu-0">
                <div className="side-menu-0-0">   
                  <ul>
                    {
                        menuIcons.map((icon,index)=>(
                                <li className={currentPath === icon.src ? 'active' : ''} key={index}>
                                    <Link  href={icon.src} aria-current="page">      
                                    <Image key={index} src={icon.path} alt={`Sidebar icon ${index}`} width='25' height='25'/>   
                                        <span>
                                            {icon.iconName}
                                        </span>
                                    </Link>
                                </li> 
                        ))
                    }
                  </ul>
                </div>
              </div>
            </div>
          </div>
  )
}

export default Sidebar