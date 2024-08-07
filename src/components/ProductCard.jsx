import React from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { formatPrice } from "../utils/compute";

function ProductCard({ product }) {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/product/${product.id}`);
    };

    return (
        <Card
            onClick={handleClick}
            sx={{
                width: 300 / 1.1,
                height: 400 / 1.1,

                display: "flex",
                flexDirection: "column",
                position: "relative",
                cursor: "pointer",
                transition: "transform 0.2s ease, box-shadow 0.2s ease",
                "&:hover": {
                    transform: "scale(1.04)",
                    boxShadow: 6,
                },
            }}
        >
            <CardMedia
                component="img"
                height="240"
                image={product.image}
                alt={product.name}
                sx={{
                    height: "240px",
                    width: "100%",
                    objectFit: "cover",
                }}
            />
            <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h5" color="text.secondary">
                    {formatPrice(product.price)}
                </Typography>
                <Typography variant="h6" color="text.secondary">
                    {product.name}
                </Typography>
                <Typography
                    noWrap
                    variant="body2"
                    color="text.secondary"
                    sx={{ mt: 0.25 }}
                >
                    {product.description}
                </Typography>
            </CardContent>
        </Card>
    );
}

export default ProductCard;
