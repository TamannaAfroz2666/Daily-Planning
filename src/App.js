import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router , Route, Link} from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Products from './components/Products';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import { Input  } from 'semantic-ui-react'




function App() {
  return (

    <Router> 
    
      <div className="container fluid ">
        <header className="App-header1">
          <p className='para h1 pt-5'> Welcome </p>
            <div className='mt-5'>
              <div class="ui secondary  menu">
              <Link to='/home' className='item'>
              Home 
              </Link>
              <Link to='/about' className='item'>
              About 
              </Link>
              <Link to='/products' className='item'>
              Product
              </Link>                
                <div class="right menu">
                  <div class="item">
                    <div class="ui icon input">
                      <Input type="text" placeholder="Search..." />
                      <i class="search link icon"></i>
                </div>
            </div>
            <a class="ui item">
              Logout
            </a>
          </div>
        </div>
          </div>
          
          
        {/* <div className='from'>
        <Form className='from-child'>
            <Form.Field>
              <label>First Name</label>
              <input placeholder='First Name' />
            </Form.Field>
            <Form.Field>
              <label>Last Name</label>
              <input placeholder='Last Name' />
            </Form.Field>
            <Form.Field>
              <Checkbox label='I agree to the Terms and Conditions' />
            </Form.Field>
            <Button type='submit' className='btn-ui-class'>Submit</Button>
         </Form>
         
        </div> */}
          <Route exact path='/home' component={Home} />
          <Route exact path='/about' component={About}/>
          <Route exact path='/products' component={Products}/>
        </header>
      </div>
   
    </Router> 
  );
}

export default App;
