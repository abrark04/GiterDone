import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";

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
          <h1 className="text-2xl font-bold text-center text-gray-800">Aegis</h1>
          <p className="text-sm text-center text-gray-500 mb-4">Athena's Shield - Protecting the Elderly from Scams</p>
          <CardContent>
            <div className="mb-4">
              <Label htmlFor="username" className="text-gray-700">Username</Label>
              <Input id="username" placeholder="Enter your username" className="mt-1" />
            </div>
            <div className="mb-4">
              <Label htmlFor="password" className="text-gray-700">Password</Label>
              <Input id="password" type="password" placeholder="Enter your password" className="mt-1" />
            </div>
            <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-xl">
              Login
            </Button>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
