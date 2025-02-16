import React from "react";
import { Card, CardContent, Button, TextField, Typography, Link, Box } from "@mui/material";
import { motion } from "framer-motion";
import shieldImage from "./assets/pictures/shield.png"; // Import the shield image

export default function LoginPage() {
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh", backgroundColor: "white" }}>
      {/* Top Header */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          padding: 2,
          backgroundColor: "white",
        }}
      >
        <Link
          href="#"
          underline="hover"
          sx={{
            marginRight: 2,
            fontFamily: "Nunito, sans-serif",
            fontSize: "20px",
            fontWeight: "regular",
            color: "black",
          }}
        >
          Sign Up
        </Link>
        <Link
          href="#"
          underline="hover"
          sx={{
            marginRight: 2,
            fontFamily: "Nunito, sans-serif",
            fontSize: "20px",
            fontWeight: "regular",
            color: "black",
          }}
        >
          English
        </Link>
        <Link
          href="#"
          underline="hover"
          sx={{
            fontFamily: "Nunito, sans-serif",
            fontSize: "20px",
            fontWeight: "regular",
            color: "black",
          }}
        >
          Contact us
        </Link>
      </Box>

      {/* Main Content */}
      <Box
        sx={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 50px",
          backgroundColor: "white",
        }}
      >
        {/* Left Side: Login Form */}
        <Box
          sx={{
            flex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Card
              sx={{
                padding: 4,
                borderRadius: 4,
                boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
                backgroundColor: "white",
                width: 400,
                textAlign: "center",
              }}
            >
              <Typography
                variant="h4"
                component="h1"
                sx={{
                  fontFamily: "Overpass, sans-serif",
                  fontSize: "36px",
                  fontWeight: "bold",
                  color: "#000000",
                  mb: 2,
                }}
              >
                Welcome to AegiShield
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontFamily: "Nunito, sans-serif",
                  fontSize: "16px",
                  color: "#000000",
                  mb: 4,
                }}
              >
                Don't have an account?{" "}
                <Link
                  href="#"
                  underline="hover"
                  sx={{
                    fontFamily: "Nunito, sans-serif",
                    fontSize: "16px",
                    color: "#81A4CD",
                  }}
                >
                  Sign up
                </Link>
              </Typography>
              <CardContent>
                <Box mb={4}>
                  <Typography
                    variant="body1"
                    sx={{
                      fontFamily: "Nunito, sans-serif",
                      fontSize: "16px",
                      color: "#000000",
                      mb: 1,
                    }}
                  >
                    Username
                  </Typography>
                  <TextField
                    fullWidth
                    variant="outlined"
                    placeholder="yourname@gmail.com"
                    sx={{
                      "& .MuiInputBase-input": {
                        fontFamily: "Nunito, sans-serif",
                        fontSize: "16px",
                        color: "#81A4CD",
                      },
                    }}
                  />
                </Box>
                <Box mb={4}>
                  <Typography
                    variant="body1"
                    sx={{
                      fontFamily: "Nunito, sans-serif",
                      fontSize: "16px",
                      color: "#000000",
                      mb: 1,
                    }}
                  >
                    Password
                  </Typography>
                  <TextField
                    fullWidth
                    type="password"
                    variant="outlined"
                    placeholder="Enter your password"
                    sx={{
                      "& .MuiInputBase-input": {
                        fontFamily: "Nunito, sans-serif",
                        fontSize: "16px",
                        color: "#81A4CD",
                      },
                    }}
                  />
                </Box>
                <Button
                  fullWidth
                  variant="contained"
                  sx={{
                    backgroundColor: "#3E7CB1",
                    "&:hover": { backgroundColor: "#356A9A" },
                    fontFamily: "Nunito, sans-serif",
                    fontSize: "28px",
                    fontWeight: "bold",
                    color: "white",
                    padding: "10px 16px",
                    borderRadius: "8px",
                  }}
                >
                  Sign In
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </Box>

        {/* Right Side: Shield Image */}
        <Box
          sx={{
            flex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src={shieldImage} // Use the imported shield image
              alt="Aegis Shield"
              style={{ width: "400px", height: "auto" }}
            />
          </motion.div>
        </Box>
      </Box>
    </div>
  );
}