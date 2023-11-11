import ConnectDB from "@/lib/DataBase";
import { NextResponse } from "next/server";

export async function GET(req) {
   await ConnectDB()
    return NextResponse.json("Fuckin Okay")
}