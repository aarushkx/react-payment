import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { Container, Grid } from "@mui/material";
import Heading from "./Heading";
import { sortProductsByPriceHighToLow } from "../utils/compute";

function ProductList({ products }) {
    const [sortedProducts, setSortedProducts] = useState([]);

    useEffect(() => {
        const sorted = sortProductsByPriceHighToLow(products);
        setSortedProducts(sorted);
    }, [products]);

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
                    {sortedProducts.map((product) => (
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
