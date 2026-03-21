import { readFile } from "node:fs/promises"
import path from "node:path"
import { NextResponse } from "next/server"

const RESUME_FILE_NAME = "resume.pdf"

export const runtime = "nodejs"

export async function GET() {
  try {
    const resumePath = path.join(process.cwd(), "public", RESUME_FILE_NAME)

    const fileBuffer = await readFile(resumePath)

    return new NextResponse(fileBuffer, {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="${RESUME_FILE_NAME}"`,
      },
    })
  } catch (error) {
    console.error(error)
    return NextResponse.json(
      { error: "Resume file not found." },
      { status: 404 }
    )
  }
}