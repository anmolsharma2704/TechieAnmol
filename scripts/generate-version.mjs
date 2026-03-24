import { readFileSync, writeFileSync } from "node:fs"
import { dirname, join } from "node:path"
import { fileURLToPath } from "node:url"

const root = join(dirname(fileURLToPath(import.meta.url)), "..")
const pkg = JSON.parse(readFileSync(join(root, "package.json"), "utf8"))

const payload = {
  version: pkg.version,
  name: pkg.name,
  builtAt: new Date().toISOString(),
}

if (process.env.VERCEL) {
  payload.vercel = {
    deploymentId: process.env.VERCEL_DEPLOYMENT_ID ?? null,
    gitCommitSha: process.env.VERCEL_GIT_COMMIT_SHA ?? null,
    environment: process.env.VERCEL_ENV ?? null,
    url: process.env.VERCEL_URL ?? null,
  }
}

writeFileSync(
  join(root, "public", "version.json"),
  `${JSON.stringify(payload, null, 2)}\n`,
  "utf8",
)
