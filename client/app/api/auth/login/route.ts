import { NextResponse } from "next/server";
import axios from "axios";

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();
    const response = await axios.post("http://127.0.0.1:8000/login", { email, password });

    return NextResponse.json(response.data);
  } catch (error: any) {
    return NextResponse.json({ error: error.response?.data || "Login failed" }, { status: 401 });
  }
}
