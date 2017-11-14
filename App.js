import React, { Component } from 'react';
import CustomerInfoForm from './CustomerInfoForm'
import PromoForm from './PromoForm'
import ProductForm from './ProductForm'
import BranchForm from './BranchForm'

class App extends Component {
  render() {
    return(
      <div>
        <CustomerInfoForm />
        <PromoForm />
        <ProductForm />
      </div>
    )
  }
}

export default App;
