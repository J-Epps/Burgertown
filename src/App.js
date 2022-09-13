import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";

import "./css/containers.css";
import "./css/hero.css";
import "./css/herobanner.css";
import "./css/styles.css";

import CssBaseline from "@material-ui/core/CssBaseline";
import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./routes/Home";
import Menu from "./routes/Menu";
import Cart from "./routes/Cart";

import Category from "./assets/Category";
import ProductListing from "./assets/ProductListing";

import allProducts from "./data/allProducts";

const productCategories = {
  Entree: ["Burger"],
  Sides: ["Sides", "Salad"]
};

export default function App() {
  const [category, setCategory] = useState();
  const [subCategory, setSubcategory] = useState();
  const [product, setProduct] = useState();
  const [cart, setCart] = useState([]);

  const handleCategoryClick = (e) => {
    const navCat = e.target.id;
    const subCat = e.target.innerHTML;
    setCategory(navCat);
    setSubcategory(subCat);
    window.scrollTo(0, 0);
  };

  const handleProductClick = (product) => {
    setProduct(product);
    window.scrollTo(0, 0);
  };

  const handleAddToCartClick = (product) => {
    // If product has been added to array yet
    let added = false;
    let cartItems = [];
    // Cart empty? Add product
    if (cart.length === 0) {
      cartItems.push(product);
      added = true;
    } else {
      for (let i = 0; i < cart.length; i++) {
        // If product added is same as product in cart
        if (product.name === cart[i].name) {
          product.qty += cart[i].qty;
          cartItems.push(product);
          added = true;
          // Make sure to re-add products already in cart that aren't duplicate matches
        } else {
          cartItems.push(cart[i]);
        }
      }
    }
    // If product not added above, add it now
    if (added === false) {
      cartItems.push(product);
    }

    setCart(cartItems);

    // setCart([...cart, product]);
    window.scrollTo(0, 0);
  };

  const handleClearCart = () => {
    setCart([]);
  };

  return (
    <div style={{ backgroundColor: "white" }}>
      <Router>
        <CssBaseline />
        <Header
          cart={cart}
          handleCategoryClick={handleCategoryClick}
          productCategories={productCategories}
        />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/category">
            <Category
              category={category}
              subCategory={subCategory}
              allProducts={allProducts}
              handleProductClick={handleProductClick}
              handleAddToCartClick={handleAddToCartClick}
            />
          </Route>
          <Route path="/product">
            <ProductListing
              product={product}
              handleCategoryClick={handleCategoryClick}
              handleAddToCartClick={handleAddToCartClick}
            />
          </Route>
          <Route path="/Cart">
            <Cart
              cart={cart}
              handleClearCart={handleClearCart}
              // handleRemoveItem={handleRemoveItem}
              handleProductClick={handleProductClick}
            />
          </Route>
          <Route path="/Menu">
            <Menu
              allProducts={allProducts}
              handleProductClick={handleProductClick}
              handleAddToCartClick={handleAddToCartClick}
              handleCategoryClick={handleCategoryClick}
            />
          </Route>
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}
