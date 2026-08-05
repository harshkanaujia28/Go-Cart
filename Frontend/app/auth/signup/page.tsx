"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function SignUpPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // ✅ Quick demo buttons
  const fillDemoUser = () => {
    setFormData({
      firstName: "Demo",
      lastName: "User",
      email: "user@demo.com",
      password: "user123",
      confirmPassword: "user123",
    });
  };

  const fillDemoAdmin = () => {
    setFormData({
      firstName: "Demo",
      lastName: "Admin",
      email: "admin@demo.com",
      password: "admin123",
      confirmPassword: "admin123",
    });
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      setLoading(false);
      return;
    }

    // ✅ NO BACKEND — Just redirect to login
    alert("Account created! Please login.");
    router.push("/auth/login");
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-16 bg-[#FAF8F2]">
      <div className="w-full max-w-md">
        <Card className="bg-white border border-gray-200 shadow-md">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl text-black">Create Account</CardTitle>
            <CardDescription className="text-gray-700">
              Join the store and explore products
            </CardDescription>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleRegister} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label>First Name</Label>
                  <Input name="firstName" value={formData.firstName} onChange={handleChange} required />
                </div>
                <div>
                  <Label>Last Name</Label>
                  <Input name="lastName" value={formData.lastName} onChange={handleChange} required />
                </div>
              </div>

              <div>
                <Label>Email</Label>
                <Input name="email" type="email" value={formData.email} onChange={handleChange} required />
              </div>

              <div>
                <Label>Password</Label>
                <Input name="password" type="password" value={formData.password} onChange={handleChange} required />
              </div>

              <div>
                <Label>Confirm Password</Label>
                <Input name="confirmPassword" type="password" value={formData.confirmPassword} onChange={handleChange} required />
              </div>

              <Button type="submit" className="w-full" disabled={loading}>
                {loading ? "Creating..." : "Create Account"}
              </Button>
            </form>

            {/* ✅ DEMO QUICK BUTTONS */}
            <div className="mt-4 flex items-center justify-between">
              <Button variant="outline" onClick={fillDemoUser}>User Demo</Button>
              <Button variant="outline" onClick={fillDemoAdmin}>Admin Demo</Button>
            </div>

            {/* ✅ Demo note */}
            <p className="mt-3 text-center text-sm text-gray-700">
              Demo User: user@demo.com / user123 <br />
              Demo Admin: admin@demo.com / admin123
            </p>

            <p className="mt-6 text-center text-sm">
              Already have an account?{" "}
              <Link href="/auth/login" className="font-medium underline">
                Sign in
              </Link>
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
