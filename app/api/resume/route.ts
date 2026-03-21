import { readFile } from "node:fs/promises"
import path from "node:path"
import { NextResponse } from "next/server"

const RESUME_FILE_NAME = "Anmol_Sharma_FullStack_Developer.pdf"

export const runtime = "nodejs"

export async function GET() {
  try {
    const resumePath = path.join(process.cwd(), RESUME_FILE_NAME)
    const fileBuffer = await readFile(resumePath)

    return new NextResponse(fileBuffer, {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="${RESUME_FILE_NAME}"`,
        "Cache-Control": "public, max-age=3600"
      }
    })
  } catch {
    return NextResponse.json({ error: "Resume file not found." }, { status: 404 })
  }
}
