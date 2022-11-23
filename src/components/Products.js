import React, { useEffect, useState } from 'react'
import './Products.css'
import axios from 'axios';
import { Button, Form } from 'semantic-ui-react'
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';

const Products = () => {
  const [name, setName] = useState('');
  const [size, setSize] = useState('');
  const [price, setPrice]= useState('');
  const [quantity, setQuantity] = useState('');
  const [APIData, setAPIData] = useState([]);
  // const [display, setDisplay] = useState({
  //   name: '',
  //   size: '',
  //   price: '',
  //   quantity:''
  // });

  useEffect (() =>{
    axios.get(`https://60fbca4591156a0017b4c8a7.mockapi.io/fakeData`).then((response)=>{
      if(response.status === 200){
      console.log('get data is:', response);
      console.log('Product Data is here:', response.data);
      setAPIData(response.data);

      }
     
    })
  }, [] );

  const setData = (data1) => {
    let { id, name, size, price, quantity } = data1;
    localStorage.setItem('ID', id);
    localStorage.setItem('Product Name', name);
    localStorage.setItem('Product size', size);
    localStorage.setItem('Product Price', price);
    localStorage.setItem('Product Quantity', quantity)
}

  const cardButton = (e) =>{
    console.log('the card button is here:');
    e.preventDefault();

    axios.post(`https://60fbca4591156a0017b4c8a7.mockapi.io/fakeData`, {
      name,
      size,
      price,
      quantity
    }).then((response) => {
      console.log(response);
      setName('');
      setPrice('');
      setSize('');
      setQuantity('');
  })
  setAPIData([...APIData,{name, price, size, quantity}])

//   setDisplay({
//     name,
//     size,
//     price,
//     quantity

//   })
}

      // history.push('/read')
  
    // localStorage.setItem('product name', name);
    // localStorage.setItem('Product size', size);
    // localStorage.setItem('product price:', price);
    // localStorage.setItem('product quantity:', quantity);
    // setName('');
    // setPrice('');
    // setSize('');
    // setQuantity('');

    
    const getData = () => {
      axios.get(`https://60fbca4591156a0017b4c8a7.mockapi.io/fakeData`)
          .then((getData) => {
           setAPIData(getData.data);
       })
  }
    const onDelete = (id) =>{
      
      axios.delete(`https://60fbca4591156a0017b4c8a7.mockapi.io/fakeData/${id}`).then(() =>{
        getData();
      })
    }

  return (
    <div>

      <div className='container1 d-flex'>
        <div className="main shadow-lg rounded">
        <h1 className='header-title text-center mt-5 '>Add Product</h1>
          <Form>
              <Form.Field>
                <label>Product Name</label>
                <input autoComplete='nope' type='text' placeholder='name' value={name} onChange={ (e) => setName(e.target.value)} />
              </Form.Field>
              <Form.Field>
                <label>Product Size</label>
                <input autoComplete='nope' type='text' placeholder='size' value={size} onChange={ (e) => setSize(e.target.value) } />
              </Form.Field>
              <Form.Field>
                <label>Product Price</label>
                <input autoComplete='nope' placeholder='price' value={price} onChange={ (e) => setPrice (e.target.value) }/>
              </Form.Field>
              <Form.Field>
                <label>Product Quantity</label>
                <input autoComplete='nope' placeholder='quantity' value={quantity} onChange={(e)=>setQuantity(e.target.value)} />
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
            <tbody>
              {APIData.map((item, i)=>{
                return(
                  <tr key={i} className='table-row'>
                  <td> {i} </td>
                  <td> {item.name && item.name }  </td>
                  <td> {item.size && item.size} </td>
                  <td> {item.price && item.price} </td>
                  <td> {item.quantity && item.quantity}</td>
                  {/* ///${item.id} */}
                 <Link to={`/update/${item.id}`}> 
                 <td> <button className='btn-Edit' onClick={() => setData(item)} >Edit</button>
                  </td>               
                 </Link>
             
                 <td> <button className='btn-Delete' onClick={() => onDelete(item.id)}>Remove</button>
                  </td>               
                
                </tr>

                )

              
              })}
             
              {/* <tr>
                <td>2</td>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <td>3</td>
                <td colSpan={2}>Larry the Bird</td>
                <td>@twitter</td>
              </tr> */}
            </tbody>
          </Table>

        </div>
        


      </div>


    </div>
  )
}

export default Products