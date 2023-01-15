import React, { useState } from 'react'
import './Login.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
// import { BrowserRouter as useHistory} from 'react-router-dom';
import { FaFacebook, FaInstagramSquare, FaTwitter } from "react-icons/fa";
import { LoginValidation } from '../Validation/Validate';
import { ErrorMessage } from '../Utils/Message/Message';



const Login = () => {
    // const history = useHistory();
    const initial = {
        email: '',
        password: "",
    }
    const [initData, setInitData] = useState(initial);
    const [error, setError] = useState (initData);
    

    //OnChange Function
    const onChangeHandler = (e) =>{
        console.log('onchange');
        const {name, value} = e.target;
        setInitData({...initData, [name]: value});
    }

     //OnSubmit funtion
    const submitHandler = (e) =>{
        e.preventDefault();
        setError(LoginValidation(initData));
        // console.log('submit success');
        // localStorage.setItem('Email:', initData.email);
        // localStorage.setItem('password:',initData.password);
        // setInitData('')
        // setPassword('');
        // setEmail('');
        // window.location.replace('/products') // another option
        // history.push('/products');  /// correct option
    }
    console.log("initial data", initData);
  return (
    <>
        <div className='container11 fluid'>
            <div className='login-head rounded '>
                <div className="sub">
                    <div className="title">
                        <h1 className='mt-5 text-center'>Login</h1>
                    </div>
                    <div className="login-form">
                    <Form autoComplete='off' onSubmit={submitHandler}>
                        <Form.Group className="mb-3" >
                            <Form.Label className='input-field'>Email address</Form.Label>
                            <Form.Control autoComplete='nope' className='input-field' value={initData.email} type="email" name='email' placeholder="Enter email" onChange={onChangeHandler}  />
                            {error.email && ErrorMessage(error.email)}
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label className='input-field' >Password</Form.Label>
                            <Form.Control autoComplete='nope' className='input-field' value={initData.password} type="password" name='password' placeholder=" Enter your Password" onChange={onChangeHandler} />
                            {error.password && ErrorMessage(error.password)}
                        </Form.Group>                        
                        <Button variant="primary" className='button-login' type="submit">
                            Login
                        </Button>
                    </Form>                   
                    </div>
            </div> 
            </div>
            <div className="icon mt-5 d-flex justify-content-evenly">            
                <div>
                    <a href="https://facebook.com">
                    <FaFacebook style={{color:'#310876', fontSize: 25}}/>
                    </a>               
                </div>
                <div>
                    <a href="https://instagram.com">
                    <FaInstagramSquare style={{color:'#310876', fontSize: 25}}/> 
                    </a>                
                </div> 
                    <div>
                        <a href="https://twitter.com">
                        <FaTwitter style={{color:'#310876', fontSize: 25}}/>
                        </a>                    
                    </div>
            
                

                
                
            
            </div>
        
        </div>
    </>
  )
}

export default Login