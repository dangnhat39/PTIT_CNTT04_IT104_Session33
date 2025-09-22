import React from 'react'
import "./App.css"
import { Provider } from "react-redux";
import ProductList from './pages/ProductList'
import ShoppingCart from './pages/ShoppingCart'
import store from "./store/store";
export default function App() {
  return (
    <Provider store={store}>
      <div className="container">
        <h1 className="page-header">Shopping Cart</h1>
        <ProductList />
        <ShoppingCart />
      </div>
    </Provider>
  );
}