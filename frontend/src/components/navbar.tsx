import { Navbar, Link, Button, Text, Avatar, Dropdown } from "@nextui-org/react";

export default function NavBar({children}:any) {
    
  
    return (
     <>
        <Navbar className="topContainer" 
        isBordered
        variant="sticky"
        maxWidth="xl">
        <Navbar.Brand>
          <Text b color="inherit" hideIn="xs">
          <Link href="/" color={"text"}>Centros Infantiles</Link>
          </Text>
        </Navbar.Brand>
        <Navbar.Content
          enableCursorHighlight
          activeColor="secondary"
          hideIn="xs"
          variant="underline"
        >
          
          <Navbar.Link isActive href="/map">
            Ubicaciones
          </Navbar.Link>
          <Navbar.Link href="/employee">Nuevo Funcionario</Navbar.Link>
          <Navbar.Link href="/stablishment">Nuevo Centro</Navbar.Link>
        </Navbar.Content>
        <Navbar.Content>
          <Navbar.Link color="inherit" href="/login">
            Soy Funcionario/a
          </Navbar.Link>
          
        </Navbar.Content>
      </Navbar>
        <main>{children}</main>
        </>
    );
  }