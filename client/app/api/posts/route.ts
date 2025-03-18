import { NextResponse } from "next/server";
import axios from "axios";

export async function POST(req: Request) {
  try {
    const { content, userId } = await req.json();
    const response = await axios.post("http://127.0.0.1:8000/posts", {
      content,
      userId,
    });

    return NextResponse.json(response.data);
  } catch (error: any) {
    return NextResponse.json(
      { error: error.response?.data || "Post creation failed" },
      { status: 400 }
    );
  }
}

export async function GET() {
  try {
    const response = await axios.get("http://127.0.0.1:8000/posts");
    return NextResponse.json(response.data);
  } catch (error: any) {
    return NextResponse.json(
      { error: "Failed to fetch posts" },
      { status: 500 }
    );
  }
}
