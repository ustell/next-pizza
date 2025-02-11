import { prisma } from "@/prisma/prisma-client"
import { NextResponse } from "next/server"

export async function GET () {
    const data = await prisma.ingredient.findMany()
    return NextResponse.json(data)
}
