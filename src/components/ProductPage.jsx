import { formatPrice } from "../utils/compute";

import React, { useState } from "react";
import { useParams } from "react-router-dom";
import {
    Container,
    Typography,
    Button,
    Grid,
    Box,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    Stack,
    Snackbar,
    Alert,
} from "@mui/material";

function ProductPage({ products, addToCart }) {
    const { id } = useParams();
    const product = products.find((p) => p.id === parseInt(id));

    // const [quantity, setQuantity] = useState(1);
    const [openSnackbar, setOpenSnackbar] = useState(false);
    const [addToCartDisabled, setAddToCartDisabled] = useState(false);
    const [buttonText, setButtonText] = useState("Add to Cart");

    if (!product) {
        return <Typography variant="h6">Product not found</Typography>;
    }

    const handleAddToCart = () => {
        addToCart(product);
        setButtonText("Added to Cart");
        setAddToCartDisabled(true);
        setOpenSnackbar(true);
    };

    const handleCloseSnackbar = () => {
        setOpenSnackbar(false);
    };

    const handleQuantityChange = (event) => {
        setQuantity(Number(event.target.value)); // Update quantity
    };

    return (
        <Container
            maxWidth="lg"
            sx={{
                maxWidth: "lg",
                mb: 12,
            }}
        >
            <Grid container spacing={4} alignItems="center">
                <Grid item xs={12} md={6}>
                    <Box
                        sx={{
                            position: "relative",
                            width: "100%",
                            paddingTop: "75%", // 4:3 aspect ratio
                            overflow: "hidden",
                            borderRadius: "8px",
                        }}
                    >
                        <Box
                            component="img"
                            src={product.image}
                            alt={product.name}
                            sx={{
                                position: "absolute",
                                top: 0,
                                left: 0,
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                            }}
                        />
                    </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Typography variant="h4" gutterBottom>
                        {product.name}
                    </Typography>
                    <Typography
                        variant="h6"
                        color="text.secondary"
                        gutterBottom
                    >
                        {formatPrice(product.price)}
                    </Typography>
                    <Typography paragraph>{product.description}</Typography>

                    <FormControl fullWidth sx={{ mb: 2 }}>
                        <InputLabel>Quantity</InputLabel>
                        <Select
                            defaultValue={1}
                            label="Quantity"
                            onChange={(e) =>
                                console.log(
                                    "Selected quantity:",
                                    e.target.value
                                )
                            }
                        >
                            {[1, 2, 3, 4, 5].map((num) => (
                                <MenuItem key={num} value={num}>
                                    {num}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>

                    <Stack direction="row" spacing={2}>
                        <Button
                            variant="outlined"
                            color="primary"
                            onClick={handleAddToCart}
                            disabled={addToCartDisabled}
                        >
                            {buttonText}
                        </Button>
                        <Button
                            variant="contained"
                            sx={{
                                boxShadow: "none",
                                "&:hover": {
                                    boxShadow: "none",
                                },
                            }}
                            onClick={() => console.log("Buy Now clicked")}
                        >
                            Buy Now
                        </Button>
                    </Stack>
                </Grid>
            </Grid>

            <Snackbar
                open={openSnackbar}
                autoHideDuration={2000}
                onClose={handleCloseSnackbar}
                anchorOrigin={{ vertical: "top", horizontal: "right" }}
                sx={{ mt: 8 }}
            >
                <Alert
                    onClose={handleCloseSnackbar}
                    severity="success"
                    sx={{ width: "100%" }}
                >
                    Item added to cart
                </Alert>
            </Snackbar>
        </Container>
    );
}

export default ProductPage;
