import React from "react";
import { Navbar, Link, Text, Avatar, Dropdown } from "@nextui-org/react";



function NavBar() {
    return <div>
        <div className="topContainer flex flex-row fixed top-0 left-0 right-0">
          <div className="logoSection flex flex-row justify-between">
            <a href="/"><img className="logo" src="/images/logo.png"></img>
             <div className="logoTitle">
             <Link href="/map">Centros Infantiles</Link>
             </div>
             
            </a>
          </div>
          <div className="navigationSection flex flex-row ">
            
            <ul className="linkSection flex flex-row">
              <div className="dv">
                <li className="navLinks flex flex-column">
                  <img className="icon" src="/images/location.png"></img>
                  <Link href="/map">Ubicaciones</Link>
                </li>
              </div>
              <div className="dv">
                <li className="navLinks flex flex-row">
                <img src="/images/plus.png" className="icon" />
                <Link href="/employee">Nuevo Funcionario</Link>
               </li>
              </div>
              <div className="dv">
                <li className="navLinks flex flex-row">
                <img src="/images/newEst.png" className="icon" />
                <Link href="/stablishment">Nuevo Centro</Link>
                </li>
              </div>
              
              <li className="navLinks">
                |
              </li>

              <div className="dv">
                <li className="navLinks flex flex-row">
                  <img src="/images/person.png" className="icon"></img>
                  <a href="/login">Soy Funcionario/a</a>
                </li>
              </div>
            </ul>
            
          </div>
        </div>
    </div>
}

export default function Layout({children}:any) {
    return (
        <>
            <NavBar />
            <main>{children}</main>
        </>
    )
}