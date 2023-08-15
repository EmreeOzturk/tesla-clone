import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import bcrypt from "bcrypt";
export async function POST(request: NextRequest) {
  const body = await request.json();
  const { email, password, firstName, lastName } = body;
  const hashedPassword = await bcrypt.hash(password, 10);
  try {
    const user = await prisma.user.create({
      data: {
        email,
        hashedPassword,
        name: firstName,
        lastName,
      },
    });
    return NextResponse.redirect("/login");
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "An error occurred while registering" },
      { status: 500 }
    );
  }
}
