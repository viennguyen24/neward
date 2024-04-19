import { NextResponse, NextRequest } from "next/server";
import { connectDb } from "@/models/db";
import User from "@/models/schema/user.mongoose";
import bcrypt from "bcryptjs";

export const POST = async (req: NextRequest) => {
  try {
    await connectDb();
    console.log("POST request received at api/auth/register");

    const reqBody = await req.json();
    const { username, email, password } = reqBody;
    console.log("reqBody: ", reqBody);

    //check if user already exists
    const existedUser = await User.findOne({
      email: email,
      username: username,
    });
    if (existedUser) {
      return NextResponse.json(
        { message: "User already existed" },
        { status: 400 }
      );
    }

    // generate hashed password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // create new User
    const newUser = new User({
      username: username,
      email: email,
      password: hashedPassword,
    });

    await newUser.save();
    console.log("NeUser: ", newUser);
    return NextResponse.json(
      {
        message: "New user registered successfully",
        success: true,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Error founded", error: error },
      { status: 500 }
    );
  }
};
