import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function NavBar() {
  return (
    <div>
      <Navbar className="navColor">
          <Container >
            <Navbar.Brand href="#home" >SST - Admin</Navbar.Brand>
          </Container>
        </Navbar>
       <br />
      </div>  
      
  );
}

export default NavBar;