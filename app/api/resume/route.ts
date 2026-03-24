import { readFile } from "node:fs/promises"
import path from "node:path"
import { NextResponse } from "next/server"

const RESUME_FILE_NAME = "resume.pdf"
const FALLBACK_RESUME_URL = process.env.NEXT_PUBLIC_RESUME_URL ?? process.env.RESUME_URL

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
  } catch {
    if (FALLBACK_RESUME_URL) {
      return NextResponse.redirect(FALLBACK_RESUME_URL)
    }

    return NextResponse.json(
      {
        error:
          "Resume is not available yet. Add public/resume.pdf or set NEXT_PUBLIC_RESUME_URL (or RESUME_URL).",
      },
      { status: 503 }
    )
  }
}