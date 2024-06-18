// /app/api/auth/login/route.js

import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

// Path to the JSON file containing users
const usersFilePath = path.resolve(process.cwd(), "data", "users.json");

export async function POST(req) {
  const { email, password } = await req.json();

  try {
    // Read the users data from the JSON file
    const users = JSON.parse(fs.readFileSync(usersFilePath, "utf-8"));

    // Check if user exists and credentials are valid
    const user = users.find(
      (u) => u.email === email && u.password === password
    );

    if (!user) {
      return NextResponse.json(
        { error: "Invalid credentials" },
        { status: 401 }
      );
    }

    // Authentication successful
    return NextResponse.json(
      { message: "Login successful", user },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
