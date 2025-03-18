"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function Login() {
  const router = useRouter();
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleLogin = async () => {
    try {
      const response = await axios.post("/api/auth/login", formData);
      localStorage.setItem("token", response.data.token);
      alert("Login successful!");
      router.push("/feed");
    } catch (error) {
      alert("Login failed");
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <input
        placeholder="Email"
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
      />
      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}
