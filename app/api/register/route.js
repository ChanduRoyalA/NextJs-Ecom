import ConnectDB from "@/lib/DataBase";
import UserEcom from "@/model/userEcom";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    await ConnectDB();
    const { name, email, password, address = {} } = await req.json();
    const findUser = await UserEcom.findOne({ name });
    if (findUser !== null) {
      return NextResponse.json({
        result: "Failed",
        message: "User Already Exists",
      });
    }
    const newUser = new UserEcom({
      name,
      email,
      password,
      address,
    });
    await newUser.save();
    return NextResponse.json({ result: "Success", message: "User Created" });
  } catch (error) {
      return NextResponse.json({ result: "Failed",message:error });
  }
}
