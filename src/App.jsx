import React, { useState, useCallback, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
    Navbar,
    ProductList,
    ProductPage,
    Cart,
    Checkout,
    Popup,
} from "./components";
import { products } from "./data/productData";
import { CssBaseline } from "@mui/material";

function App() {
    const [showPopup, setShowPopup] = useState(false);

    useEffect(() => {
        const hasSeenPopup = localStorage.getItem("hasSeenPopup");
        if (!hasSeenPopup) {
            setShowPopup(true);
            localStorage.setItem("hasSeenPopup", "true");
        }
    }, []);

    const handleClosePopup = () => {
        setShowPopup(false);
    };

    const [cart, setCart] = useState(() => {
        // Load cart from localStorage on initial render
        const savedCart = localStorage.getItem("cart");
        return savedCart ? JSON.parse(savedCart) : [];
    });

    const addToCart = useCallback(
        (item) => {
            if (!cart.find((cartItem) => cartItem.id === item.id)) {
                const updatedCart = [...cart, item];
                setCart(updatedCart);
                localStorage.setItem("cart", JSON.stringify(updatedCart));
            }
        },
        [cart]
    );

    const removeFromCart = useCallback(
        (id) => {
            const updatedCart = cart.filter((item) => item.id !== id);
            setCart(updatedCart);
            localStorage.setItem("cart", JSON.stringify(updatedCart));
            localStorage.removeItem(`product_${id}_added`);
        },
        [cart]
    );

    const clearCart = useCallback(() => {
        setCart([]);
        localStorage.removeItem("cart");
    }, []);

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
                <Route
                    path="/checkout/:id"
                    element={<Checkout products={products} />}
                />
            </Routes>
            <Popup open={showPopup} onClose={handleClosePopup} />
        </Router>
    );
}

export default App;
