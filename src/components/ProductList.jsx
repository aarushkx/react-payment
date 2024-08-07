import React from "react";
import ProductCard from "./ProductCard";
import { Container, Grid } from "@mui/material";
import Heading from "./Heading";

function ProductList({ products }) {
    return (
        <>
            <Heading />

            <Container
                maxWidth="lg"
                sx={{
                    display: "flex",
                    justifyContent: "center",
                }}
            >
                <Grid
                    container
                    spacing={3}
                    justifyContent="flex-start"
                    alignItems="center"
                    sx={{
                        padding: "16px",
                        width: "100%",
                    }}
                >
                    {products.map((product) => (
                        <Grid
                            item
                            key={product.id}
                            xs={12}
                            sm={6}
                            md={4}
                            lg={3}
                            sx={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                        >
                            <ProductCard product={product} />
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </>
    );
}

export default ProductList;
