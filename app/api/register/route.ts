import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import bcrypt from "bcrypt";
import { NextURL } from "next/dist/server/web/next-url";
export async function POST(request: NextRequest) {
  const body = await request.json();
  const { email, password, firstName, lastName } = body;
  console.log({ body });
  const hashedPassword = await bcrypt.hash(password, 10);
  try {
    const user = await prisma.user
      .create({
        data: {
          email,
          hashedPassword,
          name: firstName,
          lastName,
        },
      })
      .then(() => {
        return NextResponse.json(
          {
            message: "User created successfully",
          },
          { status: 200 }
        );
      });
  } catch (error) {
    console.log(error);
    console.log("--------------------------------");
    return NextResponse.json(
      { error: "An error occurred while registering" },
      { status: 500 }
    );
  }
}
