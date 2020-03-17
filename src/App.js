import React, { useState, useEffect } from 'react';
import './App.css';

function App() {

  const product = [
    {name: 'Laptop', brand: 'Dell', price: '$650'},
    {name: 'Laptop', brand: 'Acer', price: '$550'},
    {name: 'Laptop', brand: 'Apple', price: '$1000'},
    {name: 'Mobile', brand: 'Samsung', price: '$400'},
    {name: 'Watch', brand: 'Titan', price: '$150'}
  ];
  
  return (
    <div>

      {
        product.map(prod => <Item name={prod}></Item>)
      }

      <br/>

      
      <User></User>

    </div>
  );
}

function Item(props) {

  const {name, brand, price} = props.name;
  const [count, setCount] = useState(0);
  const clickButton = () => setCount(count + 1);
  
  const styleItem = {
      border: '1px solid blue',
      backgroundColor: 'gray',
      borderRadius: '5px',
      margin: '10px',
      paddingLeft: '10px',
      color: 'white',
      width: '200px',
      display: 'inline-block'
  };

  return (
    <div style={styleItem}>
      <h4>Product: {name}</h4>
      <h4>Brand: {brand}</h4>
      <h4>price: {price}</h4>
      <button onClick={clickButton}>add product: {count}</button>
    </div>
  )

}

function User() {

  const [user, setUser] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUser(data))
  })
  
  return (
    <div>
      <h3>Dynamic Users: {user.length}</h3>
      <ul>
        {
          user.map(element => <li>{element.name}</li>)
        }
      </ul>
    </div>
  )

}

export default App;
