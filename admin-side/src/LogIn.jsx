import React from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

function LogIn() {

  return (
    
    <Container>
        <Row>
            <Col md={6} className='welcomeText'>
            
              <h5 >Please input your admin log in credentials.</h5>
            
            </Col>
            <Col  md={6} > 
                <div className='card'>
                    <h1 className='headers'>Log In</h1>
                    <Row>
                        <input placeholder='Email' type="text" />
                    </Row> 
                    <br />
                    <Row>
                        <input placeholder='Password' type="password" />
                    </Row>
                    <br />
                    <Row>
                        <button type='submit'>Submit</button>
                    </Row>
                    <a className='forget' href="" target='blank' rel='noopener noreferrer'>Forgot password?</a>
                </div>
            </Col>
           
        </Row>  
    </Container> 
   
  );
};

export default LogIn;