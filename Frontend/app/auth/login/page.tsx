"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // ✅ Simple Demo Check
    if (email === "admin@demo.com" && password === "admin123") {
      router.push("/admin");
    } else if (email === "user@demo.com" && password === "user123") {
      router.push("/");
    } else {
      alert("Invalid demo credentials");
    }

    setLoading(false);
  };

  // ✅ One-click demo autofill
  const fillAdminDemo = () => {
    setEmail("admin@demo.com");
    setPassword("admin123");
  };

  const fillUserDemo = () => {
    setEmail("user@demo.com");
    setPassword("user123");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-muted px-4">
      <div className="w-full max-w-md">
        <Card>
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-semibold">Login</CardTitle>
            <CardDescription>Use demo account to continue</CardDescription>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label>Email</Label>
                <Input value={email} onChange={(e) => setEmail(e.target.value)} required />
              </div>

              <div className="space-y-2">
                <Label>Password</Label>
                <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
              </div>

              <Button type="submit" className="w-full" disabled={loading}>
                {loading ? "Checking..." : "Login"}
              </Button>
            </form>

            {/* ✅ DEMO BUTTONS */}
            <div className="mt-4 flex items-center justify-between">
              <Button variant="outline" onClick={fillAdminDemo}>Admin Demo</Button>
              <Button variant="outline" onClick={fillUserDemo}>User Demo</Button>
            </div>

            <p className="mt-4 text-center text-sm text-muted-foreground">
              Admin → admin@demo.com / admin123 <br />
              User → user@demo.com / user123
            </p>

            <div className="mt-6 text-center space-y-2">
              <Link href="/auth/forgot-password" className="text-sm text-primary hover:underline">
                Forgot password?
              </Link>
              <p className="text-sm text-muted-foreground">
                Don&apos;t have an account?{" "}
                <Link href="/auth/signup" className="text-primary hover:underline">
                  Sign up
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
