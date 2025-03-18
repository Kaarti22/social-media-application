"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function Register() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleRegister = async () => {
    try {
      await axios.post("/api/auth/register", formData);
      alert("Registration successful!");
      router.push("/login");
    } catch (error) {
      alert("Registration failed");
    }
  };

  return (
    <div>
      <h1>Register</h1>
      <input
        placeholder="Name"
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
      />
      <input
        placeholder="Email"
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
      />
      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
      />
      <button onClick={handleRegister}>Register</button>
    </div>
  );
}
