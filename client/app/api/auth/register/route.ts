import { NextResponse } from "next/server";
import axios from "axios";

const API_URL = "http://127.0.0.1:8000";

export async function POST(req: Request) {
  try {
    const { name, email, password } = await req.json();
    const response = await axios.post(`${API_URL}/register`, {
      name,
      email,
      password,
    });

    return NextResponse.json(response.data);
  } catch (error: any) {
    return NextResponse.json(
      { error: error.response?.data || "Registration failed" },
      { status: 400 }
    );
  }
}
