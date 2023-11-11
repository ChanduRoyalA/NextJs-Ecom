import ConnectDB from "@/lib/DataBase";
import UserEcom from "@/model/userEcom";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    await ConnectDB();
    const { email, password } = await req.json();
    const findUser = await UserEcom.findOne({ email });
    if (findUser === null) {
      return NextResponse.json({
        result: "Failed",
        message: "Invalid User",
      });
      }
    if (findUser.password === password) {
    return NextResponse.json({ result: "Success", message: "Log in",userId:findUser._id });
      }
    return NextResponse.json({ result: "Failed", message: "Invalid Password!" });
      
  } catch (error) {
    return NextResponse.json({ result: "Failed", message: error });
  }
}
