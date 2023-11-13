import ConnectDB from "@/lib/DataBase";
import products from "@/model/productSchema";
import { NextResponse } from "next/server";

export async function GET(req) {
  try {
    await ConnectDB();
    const allProducts = await products.find();
    return NextResponse.json({ allProducts, result: "Success" });
  } catch (error) {
    return NextResponse.json({ result: "Failed", message: error });
  }
}

export async function POST(req) {
    try {
      const {_id}=await req.json()
    await ConnectDB();
    const getItem = await products.findOne({_id});
    return NextResponse.json({ getItem, result: "Success" });
  } catch (error) {
    return NextResponse.json({ result: "Failed", message: error });
  }
}


