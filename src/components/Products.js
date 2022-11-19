import React from 'react'
import './Products.css'
import { Button, Form } from 'semantic-ui-react'

const Products = () => {
  return (
    <div>

      <div className='container1'>
        

        <div className="main shadow-lg rounded">
        <h1 className='header-title text-center mt-5 '>Product List</h1>
          <Form>
              <Form.Field>
                <label>Product Name</label>
                <input type='text' placeholder='name' />
              </Form.Field>
              <Form.Field>
                <label>Product Size</label>
                <input type='number' placeholder='size' />
              </Form.Field>
              <Form.Field>
                <label>Product Price</label>
                <input placeholder='price' />
              </Form.Field>
              <Form.Field>
                <label>Product Quantity</label>
                <input placeholder='quantity' />
              </Form.Field>
              <Button type='submit'>Add Cart</Button>
          </Form>
        </div>


      </div>


    </div>
  )
}

export default Products