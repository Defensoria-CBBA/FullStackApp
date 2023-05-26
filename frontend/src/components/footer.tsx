import React from "react";
import Link from "next/link";


function Footer() {
    return <div>
        <div className="footer">
        <div className="footerTitle">
          Centros Infantiles
        </div>

        <div className="copyrightContainer">
          Copyright &copy; 2023 Nasa Kisis
        </div>

        <div className="footerLinks">
          <Link href="#">Legal Stuff</Link>
          |
          <Link href="#">Privacy Policy</Link>
          |
          <Link href="#">Security</Link>
        </div>
      </div>
    </div>
}

export default function Layout({children}:any) {
    return (
        <>
            
            <main>{children}</main>
            <Footer />
        </>
    )
}