import React from 'react'
import './Login.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { BrowserRouter as Router , Route, Link} from 'react-router-dom';


const Login = () => {
    const submitHandler = (e) =>{
        console.log('submit success');
    }
  return (
    <div className='container fluid'>
        <div className='login-head rounded '>
            <div className="sub">
                <div className="title">
                    <h1 className='mt-5 text-center'>Login</h1>
                </div>
                <div className="login-form">
                <Form>
                    <Form.Group className="mb-3" >
                        <Form.Label className='input-field'>Email address</Form.Label>
                        <Form.Control className='input-field' type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label className='input-field' >Password</Form.Label>
                        <Form.Control className='input-field' type="password" placeholder="Password" />
                    </Form.Group>
                    <Link to='/products'>
                    <Button variant="primary" className='button-login' type="submit" onClick={submitHandler}>
                        Submit
                    </Button>

                    </Link>
                   
                </Form>
                
                </div>
           </div> 
          

        </div>
       
    </div>
  )
}

export default Login