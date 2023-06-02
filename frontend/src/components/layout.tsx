import React from "react";
import { Navbar, Link, Text, Avatar, Dropdown } from "@nextui-org/react";
import { useRouter } from 'next/router'



export default function NavBar({children}:any) {
  const router = useRouter();
  const showHeader = router.pathname === '/login' ? false : true;
  if (!showHeader ) {
    return null;
  }
    return (
      <div>
          <div className="topContainer flex flex-row fixed top-0 left-0 right-0">
            <div className="logoSection flex flex-row justify-between">
              
              <a href="/"><img className="logo" src="/images/logo.png"></img></a>
            
            </div>


            <div className="circleBehind">
              <div className="navigationSection flex flex-row ">
              
              <ul className="linkSection flex flex-row">
                <div className="dv">
                  <li className="navLinks flex flex-column circleBehind">
                    <img className="icon" src="/images/location.png"></img>
                    <Link color={'inherit'} href="/map">Ubicaciones</Link>
                  </li>
                </div>
                <div className="dv">
                  <li className="navLinks flex flex-row circleBehind">
                  <img src="/images/plus.png" className="icon" />
                  <Link color={'inherit'} href="/employee">Nuevo Funcionario</Link>
                </li>
                </div>
                <div className="dv">
                  <li className="navLinks flex flex-row circleBehind">
                  <img src="/images/newEst.png" className="icon" />
                  <Link color={'inherit'} href="/stablishment">Nuevo Centro</Link>
                  </li>
                </div>
                
                <li className="navLinks">
                  |
                </li>

                <div className="dv">
                  <li className="navLinks flex flex-row circleBehind">
                    <img src="/images/person.png" className="icon"></img>
                    <a href="/login">Soy Funcionario/a</a>
                  </li>
                </div>
              </ul>
              
            </div>
            </div>
            
          </div>
      </div>
    )
}

