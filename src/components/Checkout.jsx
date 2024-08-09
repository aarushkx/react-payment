import React from "react";
import { Container, Typography, Paper } from "@mui/material";

function Checkout() {
    return (
        <>
            <Container maxWidth="lg" sx={{ textAlign: "center" }}>
                <Typography variant="h4" align="center" sx={{ mb: 4 }}>
                    Payment Gateway Integration Coming Soon
                </Typography>

                <Typography varient="body1" sx={{ mb: 2, mt: 2 }}>
                    This website is currently in the development phase and is
                    designed solely for educational and illustrative purposes.
                    Please be aware that the products, prices, and
                    functionalities displayed on this site are not real and are
                    subject to significant changes as the development process
                    continues, particularly with the upcoming integration of a
                    payment system.
                </Typography>

                <Typography varient="body1" sx={{ mb: 2, mt: 2 }}>
                    The current version of the site is intended to showcase
                    potential features and design concepts rather than to
                    facilitate any actual transactions. Users should not
                    interpret the displayed product information or pricing as
                    reflective of real-world values or availability. The
                    website's features, including but not limited to product
                    listings, pricing, and checkout processes, are illustrative
                    and may not represent functioning components of a live
                    e-commerce platform.
                </Typography>

                <Typography varient="body1" sx={{ mb: 2, mt: 2 }}>
                    As this website progresses towards full functionality, the
                    information provided here may undergo substantial
                    modifications. The integration of a payment gateway and
                    other backend systems will likely alter product details and
                    pricing structures. Therefore, it is crucial to understand
                    that any data presented here should not be used as a basis
                    for real purchases or financial decisions.
                </Typography>

                <Typography varient="body1" sx={{ mb: 2, mt: 2 }}>
                    This platform is intended exclusively for demonstration and
                    learning purposes. Users are strongly discouraged from using
                    this site for any real transactions or financial activities.
                    The current setup does not guarantee the security, accuracy,
                    or reliability required for real-world e-commerce
                    operations. Any attempts to use this site for actual
                    purchases or financial transactions are at the user’s own
                    risk and should be avoided.
                </Typography>

                <Typography varient="body1" sx={{ mb: 4, mt: 2 }}>
                    Thank you for your understanding and for visiting the site.
                </Typography>
            </Container>
        </>
    );
}

export default Checkout;
