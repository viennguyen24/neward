import { NextResponse, NextRequest } from "next/server";
import User from "@/models/schema/user.mongoose";
import { connectDb } from "@/models/db";
import bcryptjs from "bcryptjs";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import { user } from "@nextui-org/react";

dotenv.config();

export const POST = async (req: NextRequest) => {
  try {
    await connectDb();
    console.log(`Request data: ${req}`);
    const reqBody = await req.json();
    const { email, password } = reqBody;

    // search user
    const userFound = await User.findOne({ email: email });

    if (!userFound) {
      return NextResponse.json(
        { message: "User not found", success: false },
        { status: 400 }
      );
    }
    console.log(`User found: ${userFound}`);
    // check password
    bcryptjs.compare(password, userFound.password, (err) => {
      if (err) {
        return NextResponse.json(
          { message: "Incorrect password", success: false },
          { status: 400 }
        );
      }
    });

    // create jwt token
    const tokenData = {
      id: userFound._id,
      email: userFound.email,
      username: userFound.username,
    };
    const JWTtoken = await jwt.sign(
      tokenData,
      process.env.JWT_SECRET || "randomdefaultsecretstring",
      { expiresIn: "7d" }
    );

    const accessToken = NextResponse.json({
      message: "Login success",
      success: true,
      token: JWTtoken,
    });

    accessToken.cookies.set("token", JWTtoken, {
      httpOnly: true,
      secure: true,
    });

    return accessToken;
  } catch (error) {
    return NextResponse.json(
      { message: "Error founded", error: error, success: false },
      { status: 500 }
    );
  }
};
