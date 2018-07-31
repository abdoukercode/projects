import React, { Component } from 'react';
import './App.css';
import ProductItem from './ProductItem';
import AddProduct from './AddProduct';
const products = [
  {
    name: "iPad",
    price: 200
  },
  {
    name: "iPhone",
    price: 6500
  },
  {
    name: "iPod",
    price: 40
  }
];



localStorage.setItem('products', JSON.stringify(products));

class App extends Component {

  constructor(props){
    super(props);
    this.state= {
      products: JSON.parse(localStorage.getItem('products'))
    };
    this.onDelete= this.onDelete.bind(this);
    this.onAd= this.onAdd.bind(this);
  }

  componentWillMount() {
    const products = this.getProducts();
    this.setState({
      products
    });
  }

    getProducts(){
      return this.state.products;
      //console.log(products);
  
    }

    onAdd(name,price){
      const products = this.getProducts();
      
      products.push({
        name,
        price
      });
      this.setState({products});
    }

    onDelete(name) {
      const products = this.getProducts();
      const filteredProducts = products.filter(product => product.name !==name);

      console.log(filteredProducts);
      this.setState({products : filteredProducts });
    }

  render() {
    return (
      <div className="App">
              <AddProduct
                onAdd= {this.onAdd}
              />

        <h1>Products Manager</h1>
        {
        this.state.products.map(product => {
          return (
              <ProductItem 
              key={product.name}
              {...product}
              onDelete={this.onDelete}
              />

          );
        })
      }
      </div>
    );
  }
}

export default App;
