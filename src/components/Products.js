import React, { useState } from 'react'
import './Products.css'
import { Button, Form } from 'semantic-ui-react'
import Table from 'react-bootstrap/Table';

const Products = () => {
  const [name, setName] = useState('');
  const [size, setSize] = useState('');
  const [price, setPrice]= useState('');
  const [quantity, setQuantity] = useState('');

  const cardButton = (e) =>{
    console.log('the card button is here:');
    e.preventDefault();
    localStorage.setItem('product name', name);
    localStorage.setItem('Product size', size);
    localStorage.setItem('product price:', price);
    localStorage.setItem('product quantity:', quantity);
    setName('');
    setPrice('');
    setSize('');
    setQuantity('');
  }

  return (
    <div>

      <div className='container1 d-flex'>
        

        <div className="main shadow-lg rounded">
        <h1 className='header-title text-center mt-5 '>Product List</h1>
          <Form>
              <Form.Field>
                <label>Product Name</label>
                <input type='text' placeholder='name' value={name} onChange={ (e) => setName(e.target.value)} />
              </Form.Field>
              <Form.Field>
                <label>Product Size</label>
                <input type='number' placeholder='size' value={size} onChange={ (e) => setSize(e.target.value) } />
              </Form.Field>
              <Form.Field>
                <label>Product Price</label>
                <input placeholder='price' value={price} onChange={ (e) => setPrice (e.target.value) }/>
              </Form.Field>
              <Form.Field>
                <label>Product Quantity</label>
                <input placeholder='quantity' value={quantity} onChange={(e)=>setQuantity(e.target.value)} />
              </Form.Field>
              <Button className='card-button mt-4' type='submit' onClick={cardButton}>Add Cart</Button>
          </Form>
        </div>
        <div className='tableClass '>


          <Table striped bordered hover>
            <thead>
              <tr className='table-row'>
                <th >Artical Number</th>
                <th>Product Name</th>
                <th>Product Size</th>
                <th>Product Price</th>
                <th>Quantity</th>
                <th>Action</th>
              </tr>
            </thead>
            {/* <tbody>
              <tr>
                <td>1</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <td>3</td>
                <td colSpan={2}>Larry the Bird</td>
                <td>@twitter</td>
              </tr>
            </tbody> */}
          </Table>

        </div>
        


      </div>


    </div>
  )
}

export default Products