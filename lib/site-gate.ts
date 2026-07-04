export const ACCESS_COOKIE_NAME = "developmonth_access";
export const ACCESS_COOKIE_MAX_AGE = 60 * 60 * 12;

// Preview-only fallbacks. Before any private data exists, set both values in
// Vercel and replace this gate with managed authentication and rate limiting.
const PREVIEW_PASSWORD = "Monkstown";
const PREVIEW_SECRET = "developmonth-preview-gate-change-before-private-data";

function toHex(buffer: ArrayBuffer) {
  return Array.from(new Uint8Array(buffer))
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("");
}

async function digest(value: string) {
  const bytes = new TextEncoder().encode(value);
  return toHex(await crypto.subtle.digest("SHA-256", bytes));
}

export async function createAccessToken() {
  const secret = process.env.DEVELOPMONTH_GATE_SECRET ?? PREVIEW_SECRET;
  return digest(`developmonth-access:${secret}`);
}

export async function passwordIsValid(candidate: string) {
  const expected =
    process.env.DEVELOPMONTH_PREVIEW_PASSWORD ?? PREVIEW_PASSWORD;
  const [candidateDigest, expectedDigest] = await Promise.all([
    digest(candidate),
    digest(expected),
  ]);

  if (candidateDigest.length !== expectedDigest.length) {
    return false;
  }

  let difference = 0;
  for (let index = 0; index < candidateDigest.length; index += 1) {
    difference |=
      candidateDigest.charCodeAt(index) ^ expectedDigest.charCodeAt(index);
  }

  return difference === 0;
}
