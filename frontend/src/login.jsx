import React from "react";
import { Card, CardContent, Button, TextField, Typography } from "@mui/material";
import { ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

export default function LoginPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Card className="p-6 shadow-lg rounded-2xl bg-white w-96">
          <div className="flex justify-center mb-4">
            <ShieldCheck className="w-16 h-16 text-blue-600" />
          </div>
          <Typography variant="h5" component="h1" className="text-center text-gray-800 font-bold">
            Aegis
          </Typography>
          <Typography variant="body2" className="text-center text-gray-500 mb-4">
            Athena's Shield - Protecting the Elderly from Scams
          </Typography>
          <CardContent>
            <div className="mb-4">
              <TextField 
                id="username" 
                label="Username" 
                variant="outlined" 
                fullWidth 
                placeholder="Enter your username" 
                className="mb-4"
              />
            </div>
            <div className="mb-4">
              <TextField 
                id="password" 
                label="Password" 
                variant="outlined" 
                type="password" 
                fullWidth 
                placeholder="Enter your password"
              />
            </div>
            <Button 
              variant="contained" 
              color="primary" 
              fullWidth 
              className="mt-4"
            >
              Login
            </Button>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
