import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck } from "@mui/icons-material";
import { Card, CardContent, TextField, Button, Typography, Box } from "@mui/material"; //testing

// Ensure the component is exported as default
export default function LoginPage() {
  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", minHeight: "100vh", backgroundColor: "#f5f5f5" }}>
      <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}>
        <Card sx={{ padding: 4, borderRadius: 4, boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)", backgroundColor: "white", width: 384, textAlign: "center" }}>
          <Box display="flex" justifyContent="center" mb={4}>
            <ShieldCheck sx={{ fontSize: 64, color: "#1976d2" }} />
          </Box>
          <Typography variant="h4" component="h1" fontWeight="bold" gutterBottom>
            Aegis
          </Typography>
          <Typography variant="body1" color="textSecondary" gutterBottom>
            Athena's Shield - Protecting the Elderly from Scams
          </Typography>
          <CardContent>
            <Box mb={4}>
              <Typography variant="body1" fontWeight="medium" color="textPrimary" gutterBottom>
                Username
              </Typography>
              <TextField fullWidth placeholder="Enter your username" variant="outlined" sx={{ mt: 1 }} />
            </Box>
            <Box mb={4}>
              <Typography variant="body1" fontWeight="medium" color="textPrimary" gutterBottom>
                Password
              </Typography>
              <TextField fullWidth type="password" placeholder="Enter your password" variant="outlined" sx={{ mt: 1 }} />
            </Box>
            <Button
              fullWidth
              variant="contained"
              sx={{
                backgroundColor: "#1976d2",
                "&:hover": { backgroundColor: "#1565c0" },
                color: "white",
                fontWeight: "bold",
                padding: "10px 16px",
                borderRadius: "12px",
              }}
            >
              Login
            </Button>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}