import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import ProductPage from "./components/ProductPage";
import Cart from "./components/Cart";
import { products } from "./data/productData";
import { CssBaseline } from "@mui/material";

function App() {
    const [cart, setCart] = useState([]);

    function addToCart(product) {
        setCart([...cart, product]);
    }

    function removeFromCart(id) {
        setCart(cart.filter((item) => item.id !== id));
    }

    function clearCart() {
        setCart([]);
    }

    return (
        <Router>
            <CssBaseline />
            <Navbar />

            <Routes>
                <Route path="/" element={<ProductList products={products} />} />
                <Route
                    path="/product/:id"
                    element={
                        <ProductPage
                            products={products}
                            addToCart={addToCart}
                        />
                    }
                />
                <Route
                    path="/cart"
                    element={
                        <Cart
                            cart={cart}
                            removeFromCart={removeFromCart}
                            clearCart={clearCart}
                        />
                    }
                />
            </Routes>
        </Router>
    );
}

export default App;
