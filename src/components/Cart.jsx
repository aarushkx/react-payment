import React from "react";
import {
    Container,
    Typography,
    List,
    ListItem,
    Button,
    Card,
    CardContent,
    CardMedia,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

function Cart({ cart, removeFromCart, clearCart }) {
    const navigate = useNavigate();

    const handleNavigateToProduct = (productId) => {
        navigate(`/product/${productId}`);
    };

    return (
        <Container
            maxWidth="md"
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
            }}
        >
            <Typography variant="h4" gutterBottom>
                Your Cart
            </Typography>
            <List
                sx={{
                    width: "100%",
                    maxWidth: 800,
                    marginBottom: 2,
                }}
            >
                {cart.length === 0 ? (
                    <Typography
                        variant="body1"
                        color="text.secondary"
                        align="center"
                    >
                        Your cart is empty.
                    </Typography>
                ) : (
                    cart.map((item) => (
                        <ListItem
                            key={item.id}
                            sx={{
                                cursor: "pointer",
                                display: "flex",
                                alignItems: "center",
                                borderBottom: "1px solid #ddd",
                                padding: 2,
                            }}
                            onClick={() => handleNavigateToProduct(item.id)}
                        >
                            <Card
                                sx={{
                                    display: "flex",
                                    width: 120,
                                    height: 80,
                                    marginRight: 2,
                                    boxShadow: "none",
                                    border: "1px solid #ddd",
                                }}
                            >
                                <CardMedia
                                    component="img"
                                    image={item.image}
                                    alt={item.name}
                                    sx={{
                                        width: "100%",
                                        height: "100%",
                                        objectFit: "cover",
                                    }}
                                />
                            </Card>
                            <CardContent
                                sx={{
                                    flex: 1,
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "center",
                                    padding: 0,
                                    marginRight: 2,
                                }}
                            >
                                <Typography variant="body1" noWrap>
                                    {item.name}
                                </Typography>
                                <Typography
                                    variant="body2"
                                    color="text.secondary"
                                >
                                    {formatPrice(item.price)}
                                </Typography>
                            </CardContent>
                            <Button
                                variant="outlined"
                                color="error"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    removeFromCart(item.id);
                                }}
                            >
                                Remove
                            </Button>
                        </ListItem>
                    ))
                )}
            </List>
            {cart.length > 0 && (
                <Button
                    variant="contained"
                    onClick={clearCart}
                    sx={{
                        mt: 4,
                        boxShadow: "none",
                        "&:hover": {
                            boxShadow: "none",
                        },
                    }}
                >
                    Clear Cart
                </Button>
            )}
        </Container>
    );
}

function formatPrice(price) {
    return new Intl.NumberFormat("en-IN", {
        style: "currency",
        currency: "INR",
    }).format(price);
}

export default Cart;
