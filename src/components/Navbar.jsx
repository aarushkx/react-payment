import React from "react";
import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    CssBaseline,
} from "@mui/material";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <>
            <CssBaseline />
            <AppBar
                color="inherit"
                position="fixed"
                sx={{ boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)" }}
            >
                <Toolbar>
                    <Typography variant="h6" sx={{ flexGrow: 1 }}>
                        <Link
                            to="/"
                            style={{ color: "inherit", textDecoration: "none" }}
                        >
                            Brand Name
                        </Link>
                    </Typography>
                    <Button color="inherit">
                        <Link
                            to="/cart"
                            style={{ color: "inherit", textDecoration: "none" }}
                        >
                            Cart
                        </Link>
                    </Button>
                </Toolbar>
            </AppBar>

            <AppBar
                color="inherit"
                position="static"
                sx={{ boxShadow: "none", mb: 8 }}
            >
                <Toolbar>
                    <Typography color={"inherit"} variant="h6">
                        E-Commerce
                    </Typography>
                </Toolbar>
            </AppBar>
        </>
    );
}

export default Navbar;
